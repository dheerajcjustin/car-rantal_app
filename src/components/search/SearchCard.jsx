import React from "react";

const SearchCard = () => {
  return (
    <>
      <div className=" max-w-lg rounded-3xl bg-[#10191F] pt-3 shadow-lg shadow-gray-500/50     ">
        <div className="flex flex-col  align-middle items-center w-full">
          <h2 className="text-xl font-semibold my-8 text-slate-50">
            Benx AMG G6
          </h2>
          <img
            src="/download.jpeg"
            alt="photo of amg"
            className="w-[400px] h-auto mb-8 rounded-xl"
          />
        </div>
        <div className="flex flex-row justify-around p-5 bg-white rounded-t-3xl text-xl ">
          <div className="text-center">
            <h6>morning</h6>
            <h6>12/10/2022</h6>
          </div>
          <div className=" text-center  pt-1 h-8 w-8 bg-gray-900 text-[#FDD23F] rounded-2xl">
            to
          </div>

          <div className="text-center#10191F">
            <h6>morning</h6>
            <h6>12/10/2022</h6>
          </div>
        </div>
        <div className="flex flex-row justify-around p-5 bg-white rounded-b-3xl text-xl ">
          <div className="text-center">
            <h6> ₹ 167 </h6>
            <h6>(128km included)</h6>
          </div>

          <div className="text-center#10191F">
            <button>book </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
