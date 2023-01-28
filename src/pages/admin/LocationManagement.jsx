import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import AddLocation from "../../components/admin/AddLocation";
import LocationTable from "../../components/admin/LocationTable";
import Modal from "../../components/UI/Modal";
import authInstance from "../../config/authInstance";
import useSWR from "swr";

const LocationManagement = () => {
  const [locationModal, setLocationModal] = useState(false);
  const modalCloseHandler = () => {
    setLocationModal(false);
  };
  const modalOpenHandler = () => {
    setLocationModal(true);
  };
  const fetcher = (url) => authInstance.get(url).then((res) => res.data);
  // .catch((err) => console.log(err));
  const { data, error, isLoading, mutate } = useSWR(`/admin/location`, fetcher);
  return (
    <div className="flex">
      <Sidebar type="location" />
      <div className="w-full h-screen">
        <div className="max-w-[90%] mx-auto bg-white mt-20 rounded-3xl p-8">
          <div className="flex flex-col w-full gap-2">
            {locationModal && (
              <Modal onClose={modalCloseHandler}>
                <AddLocation onClose={modalCloseHandler} mutate={mutate} />
              </Modal>
            )}
            <button
              className="bg-[#FDD23F] max-w-xs  h-14 rounded-lg font-semibold"
              onClick={modalOpenHandler}
            >
              Add Location
            </button>
            <LocationTable
              data={data}
              isLoading={isLoading}
              error={error}
              mutate={mutate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationManagement;
