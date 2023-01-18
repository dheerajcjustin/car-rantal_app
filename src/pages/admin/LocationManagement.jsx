import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import Location from "../../components/admin/LocationManagement";

const LocationManagement = () => {
  return (
    <div className="flex">
      <Sidebar type="location" />
      <div className="w-full h-screen">
        <div className="max-w-[90%] mx-auto bg-white mt-20 rounded-3xl p-8">
          <Location />
        </div>
      </div>
    </div>
  );
};

export default LocationManagement;
