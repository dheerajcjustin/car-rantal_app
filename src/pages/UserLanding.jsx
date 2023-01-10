import React from "react";
import Banner from "../components/UI/Banner";
import HomeSearch from "../components/UI/HomeSearch";
// import Modal from "../components/Districts_modal";
import Navbar from "../components/navbar/NavBar";

const UserLanding = () => {
  return (
    <div>
      <Navbar />
      {/* <Modal /> */}

      <Banner />
      <HomeSearch />
    </div>
  );
};

export default UserLanding;
