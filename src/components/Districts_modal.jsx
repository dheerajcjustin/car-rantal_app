import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div className="fixed top-0 left-0  w-screen h-screen z-30 bg-slate-400" />
  );
};
const ModalOverlay = (props) => {
  return (
    <div className="h-44 w-64 bg-slate-50 fixed top-56 left-72 z-50 overflow-hidden"></div>
  );
};
const DistrictsModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ModalOverlay;
