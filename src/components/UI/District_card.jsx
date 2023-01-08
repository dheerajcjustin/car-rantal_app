import React from "react";

const District_card = ({ imgUrl, title, onClose }) => {
  // console.log(imgUrl);
  return (
    <>
      <div
        onClick={() => {
          onClose(title);
        }}
        className={`w-48 h-40 bg-[url('${imgUrl}')] text-white  outline-4 outline-black rounded-2xl  bg-no-repeat   transition-all  hover:transform-gpu hover:scale-105 hover:shadow-2xl   relative flex justify-center font-bold text-xl bg-cover `}
      >
        <span className="absolute bottom-0   ">{title}</span>
      </div>
    </>
  );
};

export default District_card;
