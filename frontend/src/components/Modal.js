import React from "react";
import Backdrop from "./Backdrop";
import { CSSTransition } from "react-transition-group";

const ModalOverlay = (props) => {
    const content = (
        <div>
          {props.children}
        </div>
    );
  
    return content;
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