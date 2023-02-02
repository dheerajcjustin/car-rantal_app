import React from "react";
import VendorNavbar from "../../components/navbar/VendorNavbar";
import VendorBanner from "../../components/UI/VendorBanner";
import MyCarsList from "../../components/vendor/MyCarsList";

const LandingPage = () => {
  return (
    <>
      <div className=" bg-[url('/banner.jpg')] bg-cover bg-center">
        <VendorNavbar />
        <VendorBanner />
        {/* <Banner />
    <HomeSearch /> */}
      </div>
      <div className="bg-banana h-auto">

        <h2 className="text-3xl bg-[#FFC53E] text-center">My cars</h2>
        <MyCarsList />
      </div>
    </>
  );
};
export default LandingPage;
