import React, { useState, useEffect } from "react";
import axios from "axios";
import go from "../../assets/images/go.png";

const InputButtonComponent = ({ setLoading, loading }) => {
  const API = "30774faf5b15f5bd1210d7c4d1b20e52";
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
      scrapeData();
    }
  }, [cloneId, scrape]);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const scrapeData = async () => {
    try {
      const response2 = await axios.post(
        "http://localhost/jotform-api-php/createSubmission.php",
        {
          cloned_form_id: cloneId,
          scraped_data: scrape,
          apiKey: API,
        }
      );
      const data2 = await response2.data;
      setLoading(false);
      setUrl("");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setUrl("");
    }
  };

  const cvWizard = async () => {
    await JF.login(
      async function success() {
        setLoading(true);
        var apiKey = await JF.getAPIKey();

        try {
          const response = await axios.post(
            "http://localhost/jotform-api-php/createForm.php",
            {
              api_key: apiKey,
              form_id: "232002297479054",
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

  return (
    <div className="link-input">
      <input
        value={url}
        onChange={handleChange}
        type="text"
        placeholder="URL'yi yapıştırın ve işlemi başlatın"
      />
      <button disabled={disabled} onClick={cvWizard}>
        <img src={go} alt="Git" />
      </button>
    </div>
  );
};

export default InputButtonComponent;
