import React from "react";
import ReactDOM from "react-dom";
import District_card from "./UI/District_card";

const Backdrop = ({ onClose }) => {
  const closeButtonHandler = () => {
    console.log(onClose);
    onClose();
  };
  return (
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40  bg-slate-500 bg-opacity-75"
      onClick={closeButtonHandler}
    />
  );
};
const ModalOverlay = ({ onClose }) => {
  const closeButtonHandler = () => {
    console.log(onClose);
    onClose();
  };
  return (
    <div className="  bg-gray-900 relative w-auto my-10 md:my-32 sm:my-20 lg:my-40  xl:my-50 mx-auto z-50  max-w-6xl md:p-10 rounded-2xl">
      <button onClick={closeButtonHandler}>close</button>
      {/* <div
        className={`w-48 h-40 bg-[url('/img/thrissur.jpeg')] text-white  outline-4 outline-black rounded-2xl  bg-no-repeat   transition-all  hover:transform-gpu hover:scale-105 hover:shadow-2xl   relative flex justify-center font-bold text-xl`}
      >
        <span className="absolute bottom-0   ">kannur</span>
      </div> */}
      <h3 className="text-center text-2xl text-emerald-400">select District</h3>
      <div className="grid grid-cols-2  gap-5 m-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5  md:p-4 overflow-x-hidden overflow-y-auto ">
        <District_card
          onClose={onClose}
          key={"Kannur"}
          imgUrl="/img/kannur.jpeg"
          title="Kannur"
        />
        <District_card
          onClose={onClose}
          key={"kasaragod"}
          imgUrl={"/img/kasaragod.jpeg"}
          title="kasaragod"
        />
        <District_card
          onClose={onClose}
          imgUrl={"/img/idukki.jpg"}
          title="Idukki"
          key={"Idukki"}
        />
        <District_card
          onClose={onClose}
          imgUrl={"/img/pathanamthitta.jpeg"}
          title="pathanamthitta"
          key={"pathanamthitta"}
        />
        <District_card
          onClose={onClose}
          imgUrl={"/img/kozhikode.jpeg"}
          title="Kozhikode"
          key="Kozhikode"
        />
        <District_card
          onClose={onClose}
          imgUrl={"/img/malapuram.jpeg"}
          title="Malapuram"
          key="malapuram"
        />
        <District_card
          onClose={onClose}
          imgUrl={"/img/wayand.jpeg"}
          title="Wyanad"
          key="wayand"
        />
        <District_card
          onClose={onClose}
          key="palakkad"
          imgUrl={"/img/palakkad.jpeg"}
          title="Palakkad"
        />
        <District_card
          onClose={onClose}
          key="thrissur"
          imgUrl={"/img/thrissur.jpeg"}
          title="thrissur"
        />
      </div>
    </div>
  );
};
const DistrictsModal = (props) => {
  console.log(props);
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default DistrictsModal;
