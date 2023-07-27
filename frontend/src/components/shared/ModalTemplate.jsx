import React from "react";
import { useCvContext } from "../../context/Context";

const ModalTemplate = ({ template, tempID }) => {
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
      <p className="template-title">Classical</p>
    </div>
  );
};

export default ModalTemplate;
