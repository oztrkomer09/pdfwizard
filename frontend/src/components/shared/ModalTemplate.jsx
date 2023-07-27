import React from "react";

const ModalTemplate = ({ template }) => {
  return (
    <div className="modal-template">
      <button className="select">Select</button>
      <img src={template} alt="template" />
      <p className="template-title">Classical</p>
    </div>
  );
};

export default ModalTemplate;
