import React from "react";
import AddLocation from "./AddLocation";
import AddPickup from "./AddPickup";

const LocationManagement = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 w-full gap-10">
      <AddLocation />
      <AddPickup />
    </div>
  );
};

export default LocationManagement;
