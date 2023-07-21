import React, { useState } from "react";
import axios from "axios";
import go from "../../assets/images/go.png";

const InputButtonComponent = () => {
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.post("http://localhost:8800/scrape", {
        url: url,
      });

      // İsteğin başarıyla tamamlanması durumunda buraya gelinir
      const data = response.data;
      console.log(data);
    } catch (error) {
      // Hata durumunda buraya gelinir
      console.error("İsteğin yapılması sırasında bir hata oluştu:", error);
    }
  };
  return (
    <div className="link-input">
      <input
        onChange={handleChange}
        type="text"
        placeholder="URL'yi yapıştırın ve işlemi başlatın"
      />
      <button onClick={fetchUserData}>
        <img src={go} alt="Git" />
      </button>
    </div>
  );
};

export default InputButtonComponent;
