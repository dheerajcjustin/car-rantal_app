import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import AddLocation from "../../components/admin/location/AddLocation";
import AddPickUP from "../../components/admin/location/AddPickup";
import LocationTable from "../../components/admin/LocationTable";
import Modal from "../../components/UI/Modal";
import { fetcher } from "../../config/authInstance";

import useSWR from "swr";
// import PickupMap from "../../components/admin/location/PickupMap";
import AddPickup from "../../components/admin/location/AddPickup";
import PickupPoints from "../../components/admin/location/PickupPoints";

const LocationManagement = () => {
      const [pickup, setPickup] = useState({});
      const [showLocation, setShowLocation] = useState(true);
      const [locationModal, setLocationModal] = useState(false);
      const modalCloseHandler = () => {
            setLocationModal(false);
      };
      const modalOpenHandler = () => {
            setLocationModal(true);
      };
      // .catch((err) => console.log(err));
      const { data, error, isLoading, mutate } = useSWR(
            `/admin/location`,
            fetcher,
      );
      return (
            <div className="flex">
                  <Sidebar type="location" />
                  <div className="w-full h-screen">
                        <div className="max-w-[90%] mx-auto bg-white mt-20 rounded-3xl p-8">
                              {showLocation ? (
                                    <div className="flex flex-col w-full gap-2">
                                          <button
                                                className="bg-[#FDD23F] max-w-xs  h-14 rounded-lg font-semibold"
                                                onClick={modalOpenHandler}
                                          >
                                                Add Location
                                          </button>
                                          {locationModal && (
                                                <Modal
                                                      onClose={
                                                            modalCloseHandler
                                                      }
                                                >
                                                      <AddLocation
                                                            onClose={
                                                                  modalCloseHandler
                                                            }
                                                            mutate={mutate}
                                                      />
                                                </Modal>
                                          )}
                                          <LocationTable
                                                setPickup={setPickup}
                                                setShowLocation={
                                                      setShowLocation
                                                }
                                                data={data}
                                                isLoading={isLoading}
                                                error={error}
                                                mutate={mutate}
                                          />
                                    </div>
                              ) : (
                                    <PickupPoints
                                          pickup={pickup}
                                          backButton={setShowLocation}
                                    />
                              )}
                        </div>
                        {/* <AddLocation /> */}
                  </div>
            </div>
      );
};

export default LocationManagement;
