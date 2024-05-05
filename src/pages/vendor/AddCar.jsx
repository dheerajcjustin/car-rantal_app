import React from "react";
import VendorNavbar from "../../components/navbar/VendorNavbar";
import Banner from "../../components/UI/Banner";
import HomeSearch from "../../components/UI/HomeSearch";
import AddCarCompound from "../../components/vendor/AddCar/AddCar";

const AddCar = () => {
      return (
            <div className=" bg-[url('/banner.jpg')] h-full          bg-cover bg-center">
                  <VendorNavbar />
                  <AddCarCompound />
            </div>
      );
};

export default AddCar;
