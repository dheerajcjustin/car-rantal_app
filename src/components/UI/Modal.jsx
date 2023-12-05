import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, children }) => {
  const closeButtonHandler = (e) => {
    if (e.target.id === "overlay") onClose();
  };

  return createPortal(
    <div>
      <div
        id="overlay"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto  fixed inset-0 z-40  bg-slate-500 bg-opacity-75"
        onClick={closeButtonHandler}
      >
        <div className="  bg-gray-900 relative  mx-auto z-50    rounded-2xl">
          {onClose && <button className="m-3 bg-banana px-3 rounded-lg" onClick={onClose}>close</button>}

          <div className="p-5">
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
