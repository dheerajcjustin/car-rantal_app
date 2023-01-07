import React from "react";
import Banner from "../components/Banner";
import DistrictsModal from "../components/Districts_modal";
import HomeSearch from "../components/HomeSearch";
// import Modal from "../components/Districts_modal";
import Navbar from "../components/navbar/NavBar";
DistrictsModal;

const UserLanding = () => {
  return (
    <div>
      <Navbar />
      {/* <Modal /> */}
      <DistrictsModal />

      <Banner />
      <HomeSearch />
    </div>
  );
};

export default UserLanding;
