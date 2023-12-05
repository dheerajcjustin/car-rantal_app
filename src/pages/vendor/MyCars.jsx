import React from "react";
import useSWR from "swr";
import VendorNavbar from "../../components/navbar/VendorNavbar";
import VendorBanner from "../../components/UI/VendorBanner";
import MyCarsCard from "../../components/vendor/MyCarsCard";
import MyCarsList from "../../components/vendor/MyCarsList";
import authInstance from "../../config/authInstance";

const MyCars = () => {
      return (
            <div className=" bg-[url('/banner.jpg')] bg-cover bg-center ">
                  <VendorNavbar />
                  <MyCarsList />
            </div>
      );
};

export default MyCars;
