import ProductDetailsSkeleton from "@/components/layouts/skeleton/ProductDetailsPage";
import React from "react";

const loading = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <ProductDetailsSkeleton />
    </div>
  );
};

export default loading;
