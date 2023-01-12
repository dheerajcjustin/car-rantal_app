import React, { useState } from "react";
import Filter from "./Filter";

const FilterDesktop = () => {
  return (
    <div className="bg-[#10191F] hidden lg:block w-full p-5 mt-10 rounded-t-3xl">
      <Filter />
    </div>
  );
};

export default FilterDesktop;
