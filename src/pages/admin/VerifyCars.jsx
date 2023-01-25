import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import CarVerificationCard from "../../components/admin/CarVerificationCard";
import CarsManagement from "../../components/admin/CarsManagement";
import authInstance from "../../config/authInstance";

const VerifyCars = () => {
  return (
    <div className="flex">
      <Sidebar type="vendor" />
      <div className="w-full h-screen">
        <CarsManagement />
      </div>
    </div>
  );
};

export default VerifyCars;
