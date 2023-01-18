import React from "react";
import Sidebar from "../../components/admin/Sidebar";

const VendorManagement = () => {
  return (
    <div className="flex">
      <Sidebar type="vendor" />
      <div className="w-full h-screen">
        <div className="max-w-[1200px] mx-auto bg-white mt-20 rounded-3xl p-8">
          {/* <UserManagementTable /> */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default VendorManagement;
