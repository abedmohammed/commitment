import React from "react";
import Backdrop from "./Backdrop";
import { CSSTransition } from "react-transition-group";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ModalOverlay = ({ children, title, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal__header">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" onClick={onCancel}>
          <IoIosCloseCircleOutline className="modal__close-icon" />
        </button>
      </div>
      {children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames={"modal"}
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
