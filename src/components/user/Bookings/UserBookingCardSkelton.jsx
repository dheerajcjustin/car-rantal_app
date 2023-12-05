import React from "react";

import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
const UserBookingCardSkelton = () => {
      return (
            <div className=" my-3 flex flex-row justify-around bg-gray-200 w-full rounded-3xl pt-3 shadow-lg shadow-gray-500/50     ">
                  <br />
                  <div className="my-auto">
                        <Skeleton>
                              <h2 className=" text-lg sm:text-xl font-semibold  text-gray-800">
                                    dfdsfdsfdsfasffdsdfdsafsaddssf
                              </h2>
                        </Skeleton>

                        <Skeleton>
                              <div className="w-[180px]  h-auto mb-8 rounded-xl" />
                        </Skeleton>
                  </div>

                  <div className="text-center  my-auto">
                        <Skeleton>
                              <h6 className="text-xl">dfdfdffas</h6>
                        </Skeleton>
                        <Skeleton>
                              <h6 className="text-xl">dfgdsfgdgfdgd</h6>
                        </Skeleton>
                        <Skeleton>
                              <h1 className="text-xl">vvdddgddf </h1>
                        </Skeleton>
                  </div>
            </div>
      );
};

export default UserBookingCardSkelton;
