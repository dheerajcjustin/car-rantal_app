import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import VendorManagement from "../../components/admin/VendorManagement";
// import CarsManagement from "../../components/admin/CarsManagement";

const VendorManagementPage = () => {
      const [showAll, setShowAll] = useState(true);

      return (
            <div className="flex">
                  <Sidebar type="vendor" />
                  <div className="w-full h-screen">
                        <div className="mt-5 ml-5 mr-5 flex">
                              <h1
                                    className={`w-full border-b-2 border-r-2 ${
                                          showAll ? `border-banana` : ``
                                    }   rounded-lg   text-2xl text-center`}
                                    onClick={() => setShowAll(true)}
                              >
                                    VendorList
                              </h1>
                              {/* <h1 className={`w-full border-b-2 border-l-2 ${showAll ? `` : `border-banana`} rounded-lg  text-2xl text-center`} onClick={() => setShowAll(false)} >Vendor Reports</h1> */}
                        </div>
                        {showAll ? <VendorManagement /> : <div />}
                  </div>
            </div>
      );
};

export default VendorManagementPage;
