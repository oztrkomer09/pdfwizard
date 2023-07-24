import React, { useState } from "react";
import axios from "axios";
import go from "../../assets/images/go.png";
import { useEffect } from "react";

const InputButtonComponent = ({ setLoading, loading }) => {
  const [url, setUrl] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (url.trim("").length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [url]);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const scrapeData = async (apiKey) => {
    try {
      const response = await axios.post(
        "http://localhost/jotform-api-php/createForm.php",
        {
          api_key: apiKey,
          form_id: "232002297479054",
          linkedin_url: url,
        }
      );

      // İsteğin başarıyla tamamlanması durumunda buraya gelinir
      const data = response.data;
      setLoading(false);
      setUrl("");
      console.log(data);
    }
     catch (error) {
      console.log(error);
      setLoading(false);
      setUrl("");
    }
  };

  const cvWizard = async () => {
    await JF.login(
      async function success() {
        var apiKey = await JF.getAPIKey();
        scrapeData(apiKey);
      },

      function error() {
        window.alert("Could not authorize user");
      }
    );

    setLoading(true);
  };
  return (
    <div className="link-input">
      <input
        value={url}
        onChange={handleChange}
        type="text"
        placeholder="URL'yi yapıştırın ve işlemi başlatın"
      />
      {/* TODO: button disable handling */}
      <button disabled={disabled} onClick={cvWizard}>
        <img src={go} alt="Git" />
      </button>
    </div>
  );
};

export default InputButtonComponent;
