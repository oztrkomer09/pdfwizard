import React from "react";
import template1 from "../../assets/images/template1.png";
import template2 from "../../assets/images/template2.png";
import ModalTemplate from "../shared/ModalTemplate";
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
          <ModalTemplate template={template1} />
          <ModalTemplate template={template2} />
          <ModalTemplate template={template1} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
