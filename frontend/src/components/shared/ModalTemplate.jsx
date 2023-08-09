import React from "react";
import { useCvContext } from "../../context/Context";

const ModalTemplate = ({ template, tempID, tempTitle }) => {
  const { chooseTemplateAndRun } = useCvContext();

  const selectTemplate = () => {
    chooseTemplateAndRun(tempID);
  };

  return (
    <div className="modal-template">
      <button className="select" onClick={selectTemplate}>
        Select
      </button>
      <img src={template} alt="template" />
      <p className="template-title">{tempTitle}</p>
    </div>
  );
};

export default ModalTemplate;
