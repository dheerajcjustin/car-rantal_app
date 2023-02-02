import React from "react";

const Modal = ({ onClose, children }) => {
  const closeButtonHandler = (e) => {
    if (e.target.id === "overlay") onClose();
  };
  return (
    <div
      id="overlay"
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto  fixed inset-0 z-40  bg-slate-500 bg-opacity-75"
      onClick={closeButtonHandler}
    >
      <div className="  bg-gray-900 relative  mx-auto z-50   p-10 rounded-2xl">
        <button onClick={onClose}>close</button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
