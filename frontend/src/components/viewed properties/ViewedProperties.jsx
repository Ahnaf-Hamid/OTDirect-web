import React from "react";
import PropertyCardViewed from "./PropertyCardViewed";

const ViewedProperties = () => {
  return (
    <div className="max-w-[1450px] mx-auto px-2 mt-10">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Most Viewed Properties</h1>
      <div>
        <PropertyCardViewed />
      </div>
    </div>
  );
};

export default ViewedProperties;
