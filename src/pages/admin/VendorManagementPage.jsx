import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import VendorManagement from "../../components/admin/VendorManagement";
// import CarsManagement from "../../components/admin/CarsManagement";
import authInstance from "../../config/authInstance";


const VendorManagementPage = () => {
  return (
    <div className="flex">
      <Sidebar type="vendor" />
      <div className="w-full h-screen">
        vendor Management
        <VendorManagement />
      </div>
    </div>
  )
}

export default VendorManagementPage