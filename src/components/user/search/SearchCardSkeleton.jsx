import React from "react";

const SearchCardSkeleton = () => {
      return (
            <div className="  max-w-lg rounded-3xl bg-[#10191F] pt-3 shadow-lg shadow-gray-500/50     ">
                  <div className="flex flex-col  align-middle items-center w-full">
                        <h2 className="animate-pulse rounded-sm w-48 h-8 bg-slate-400 text-xl font-semibold my-8 text-slate-50"></h2>
                        <div className="animate-pulse w-full h-[160px] mb-8  bg-slate-400  rounded-3xl" />
                  </div>
                  <div className="flex flex-row justify-around p-5 bg-white rounded-t-3xl text-xl ">
                        <div className="text-center">
                              <h6 className="animate-pulse bg-slate-400 rounded-md w-32 h-8  "></h6>
                              <h6 className="animate-pulse bg-slate-400 rounded-md w-32 h-8 my-4"></h6>
                        </div>
                        <div className=" animate-pulse text-center  pt-1 h-8 w-8 bg-gray-900 text-[#FDD23F] rounded-2xl">
                              .
                        </div>

                        <div className="text-center#10191F">
                              <h6 className="animate-pulse bg-slate-400 rounded-md w-32 h-8  "></h6>
                              <h6 className="animate-pulse bg-slate-400 rounded-md w-32 h-8 my-4"></h6>
                        </div>
                  </div>
                  <div className="flex flex-row justify-around p-5 bg-white rounded-b-3xl text-xl ">
                        <div className="text-center">
                              <h6 className="animate-pulse bg-slate-400 rounded-md w-32 h-8 ">
                                    {" "}
                                    ₹....
                              </h6>
                              <h6 className="animate-pulse">............</h6>
                        </div>

                        <div className="text-center#10191F">
                              <button className="animate-pulse bg-yellow-400 px-5 py-2 rounded-lg">
                                    ....{" "}
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default SearchCardSkeleton;
