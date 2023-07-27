import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const cvContext = createContext();

export const CvProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API = "30774faf5b15f5bd1210d7c4d1b20e52";
  const [templateID, setTemplateID] = useState("");
  const [url, setUrl] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [cloneId, setCloneId] = useState("");
  const [scrape, setScrape] = useState();

  useEffect(() => {
    if (url.trim("").length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [url]);

  useEffect(() => {
    if (cloneId && scrape) {
      sendSubmission();
    }
  }, [cloneId, scrape]);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const sendSubmission = async () => {
    await cloneTemplate();
    try {
      await axios.post(
        "http://localhost/jotform-api-php/createSubmission.php",
        {
          cloned_form_id: cloneId,
          scraped_data: scrape,
          apiKey: API,
        }
      );

      setLoading(false);
      setUrl("");
      window.open(`https://www.jotform.com/pdf-editor/${cloneId}`, "_blank");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setUrl("");
    }
  };

  const cloneTemplate = async () => {
    const response = await axios.get(
      `https://api.jotform.com/pdf/${templateID}/clone?formID=${cloneId}&apiKey=${API}`
    );
  };

  const cvWizard = async () => {
    await JF.login(
      async function success() {
        setDisabled(true);
        setLoading(true);
        var apiKey = await JF.getAPIKey();

        try {
          const response = await axios.post(
            "http://localhost/jotform-api-php/createForm.php",
            {
              api_key: apiKey,
              form_id: "232062121530034",
              linkedin_url: url,
            }
          );

          const data = response.data || {};
          const { response: dataResponse = {}, scraped_data } = data;
          setCloneId(dataResponse.id);
          setScrape(scraped_data);
        } catch (error) {
          console.log(error);
          setLoading(false);
          setUrl("");
        }
      },

      function error() {
        window.alert("Could not authorize user");
        setLoading(false);
        setUrl("");
      }
    );
  };

  const chooseTemplateAndRun = (tempID) => {
    setTemplateID(tempID);
    setIsModalOpen(false);
    cvWizard();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const data = {
    loading,
    isModalOpen,
    API,
    url,
    disabled,
    cvWizard,
    handleChange,
    chooseTemplateAndRun,
    closeModal,
    openModal,
  };

  return <cvContext.Provider value={data}>{children}</cvContext.Provider>;
};

export const useCvContext = () => useContext(cvContext);
