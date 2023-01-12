import React from "react";
import Banner from "../components/UI/Banner";
import HomeSearch from "../components/UI/HomeSearch";
// import Modal from "../components/Districts_modal";
import Navbar from "../components/navbar/NavBar";

const UserLanding = () => {
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
