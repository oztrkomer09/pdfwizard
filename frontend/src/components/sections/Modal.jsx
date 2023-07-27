import React from "react";
import template1 from "../../assets/images/template1.png";
import template2 from "../../assets/images/template2.png";
import { useCvContext } from "../../context/Context";

const Modal = () => {
  const { setIsModalOpen } = useCvContext();
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={closeModal} className="close">
          &times;
        </span>
        <p className="modal-title">Choose Template</p>
        <p className="modal-info">
          Explore the most suitable templates to create CV in minutes
        </p>
        <div className="modal-templates">
          <div className="modal-template">
            <img src={template1} alt="template1" />
            <p className="template-title">Classical</p>
          </div>
          <div className="modal-template">
            <img src={template2} alt="template2" />
            <p className="template-title">Official</p>
          </div>
          <div className="modal-template">
            <img src={template1} alt="template1" />
            <p className="template-title">Creative</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
