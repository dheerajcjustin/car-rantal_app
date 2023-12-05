import React, { useEffect } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Banner from "../../components/admin/Banner";
import {
      getLocation,
      selectLocation,
} from "../../helpers/location/locationSlice";
import { useDispatch, useSelector } from "react-redux";

const AdminLanding = () => {
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(getLocation());
      }, []);
      return (
            <div className="flex">
                  <Sidebar />
                  <div className="">
                        <Banner />
                  </div>
            </div>
      );
};

export default AdminLanding;
