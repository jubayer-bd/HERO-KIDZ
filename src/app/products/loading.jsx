import React from "react";
import ProductSkeleton from "@/components/layouts/skeleton/ProductSkeleton.jsx";
const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {[...Array(9)].map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
};

export default Loading;
