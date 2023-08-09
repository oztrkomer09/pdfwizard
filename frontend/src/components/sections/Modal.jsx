import React from "react";
import template1 from "../../assets/images/template1.png";
import template2 from "../../assets/images/template2.png";
import template3 from "../../assets/images/template3.png";
import ModalTemplate from "../shared/ModalTemplate";
import { useCvContext } from "../../context/Context";

const Modal = () => {
  const { closeModal } = useCvContext();

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
          <ModalTemplate
            template={template1}
            tempID="10232062469471053"
            tempTitle="Classical"
          />
          <ModalTemplate
            template={template2}
            tempID="10232073123524041"
            tempTitle="Official"
          />
          <ModalTemplate
            template={template3}
            tempID="10232072143564046"
            tempTitle="Creative"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
