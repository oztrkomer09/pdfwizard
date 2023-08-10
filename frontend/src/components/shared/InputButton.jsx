import React from "react";
import go from "../../assets/images/go.png";
import { useCvContext } from "../../context/Context";

const InputButtonComponent = () => {
  const { url, disabled, handleChange, openModal } = useCvContext();

  return (
    <div className="link-input">
      <input
        value={url}
        onChange={handleChange}
        type="url"
        placeholder="Paste the URL and run it!"
      />
      <button disabled={disabled} onClick={openModal}>
        <img src={go} alt="Git" />
      </button>
    </div>
  );
};

export default InputButtonComponent;
