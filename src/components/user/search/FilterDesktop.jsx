import React, { useState } from "react";
import Filter from "./Filter";

const FilterDesktop = ({ pickups, setSelectedPickups }) => {
  console.log("pickups", pickups);
  return (
    <div className="bg-[#10191F] hidden lg:block w-full h-[85vh] p-5 mt-10 rounded-3xl">
      <Filter availableLocation={pickups} setSelectedPickups={setSelectedPickups} />
    </div>
  );
};

export default FilterDesktop;
