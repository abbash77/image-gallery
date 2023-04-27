import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.clickBD} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <img src={props.src}/>
      <p>{props.desc}</p>
    </div>
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop clickBD={props.clickBD}/>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay desc={props.desc} src={props.src}/>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default Modal;