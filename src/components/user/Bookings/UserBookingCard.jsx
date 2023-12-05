import Modal from "../../UI/Modal";
import ReportVendor from "./ReportVendor";
import React, { useState } from "react";

const UserBookingCard = ({ data, title }) => {
      const [showReportModal, setShowReportModal] = useState(false);
      const ReportHandler = (id) => {
            setShowReportModal(true);
      };
      const onclose = () => {
            setShowReportModal(false);
      };
      return (
            <>
                  <div className="flex flex-row justify-around bg-gray-200 w-full rounded-3xl pt-3 shadow-lg shadow-gray-500/50     ">
                        {showReportModal && (
                              <>
                                    <Modal onClose={onclose}>
                                          <ReportVendor
                                                carData={data?.carData}
                                          />
                                    </Modal>
                              </>
                        )}
                        <div className="my-auto">
                              <h2 className=" text-lg sm:text-xl font-semibold  text-gray-800">
                                    {data?.carData?.name}
                              </h2>

                              <img
                                    src={data?.carData?.photos[0]}
                                    alt="photo of amg"
                                    className="w-[180px]  h-auto mb-8 rounded-xl"
                              />
                        </div>

                        <div className="text-center  my-auto">
                              <h6 className="text-xl">
                                    {!data?.pickupStatus
                                          ? data?.pickupTime
                                          : data.dropOffTime}
                              </h6>
                              <h6 className="text-xl">
                                    {" "}
                                    {!data?.pickupStatus
                                          ? data?.pickupDate
                                          : data.dropOffDate}{" "}
                              </h6>
                              <h1 className="text-xl">{data?.pickup?.name} </h1>
                              <h1 className="text-xl">
                                    Amount Paid ₹{data?.price}{" "}
                              </h1>
                        </div>
                        {
                              <div className="h-full flex flex-col justify-center">
                                    {data?.dropOffStatus ? (
                                          <div>
                                                <div className="bg-green-400 text-xl p-5 rounded-xl ">
                                                      completed
                                                </div>
                                                <p
                                                      className="underline cursor-pointer"
                                                      onClick={() =>
                                                            ReportHandler(
                                                                  data?.carData
                                                                        ?._id,
                                                            )
                                                      }
                                                >
                                                      Report
                                                </p>
                                          </div>
                                    ) : data?.pickupStatus ? (
                                          <button className="bg-green-400 text-xl p-5 rounded-xl">
                                                {" "}
                                                Drop Off
                                          </button>
                                    ) : (
                                          <button className="bg-green-400 text-xl p-5 rounded-xl">
                                                {" "}
                                                pickup
                                          </button>
                                    )}
                              </div>
                        }
                  </div>
            </>
      );
};

export default UserBookingCard;
