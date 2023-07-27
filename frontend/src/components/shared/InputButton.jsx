import React, { useState, useEffect } from "react";
import axios from "axios";
import go from "../../assets/images/go.png";
import { useCvContext } from "../../context/Context";

const InputButtonComponent = () => {
  const { url, disabled, cvWizard, handleChange } = useCvContext();

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
