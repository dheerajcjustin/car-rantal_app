import React from "react";
import VendorNavbar from "../../components/navbar/VendorNavbar";
import VendorBanner from "../../components/UI/VendorBanner";
VendorBanner;

const LandingPage = () => {
  return (
    <div className=" bg-[url('/banner.jpg')] bg-cover bg-center">
      <VendorNavbar />
      <VendorBanner />
      {/* <Banner />
    <HomeSearch /> */}
    </div>
  );
};
export default LandingPage;
