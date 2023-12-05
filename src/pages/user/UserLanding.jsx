import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../../components/UI/Banner";
import HomeSearch from "../../components/UI/HomeSearch";
// import Modal from "../components/Districts_modal";
import Navbar from "../../components/navbar/NavBar";
import {
      getLocation,
      selectLocation,
} from "../../helpers/location/locationSlice";

const UserLanding = () => {
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(getLocation());
      }, []);

      return (
            <div className=" bg-[url('/banner.jpg')] bg-cover bg-center">
                  <Navbar />
                  {/* <Modal /> */}
                  <Banner />
                  <HomeSearch />
            </div>
      );
};

export default UserLanding;
