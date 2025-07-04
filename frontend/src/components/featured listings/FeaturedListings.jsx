import React from "react";
import PropertyCardFeatured from "./PropertyCardFeatured";

const FeaturedListings = () => {
  return (
    <div className="max-w-[1450px] mx-auto px-2 mt-10 md:mt-0">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">Featured Listings</h1>
      <div className="flex">
        <PropertyCardFeatured />
      </div>
    </div>
  );
};

export default FeaturedListings;