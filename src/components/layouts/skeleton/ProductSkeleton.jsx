import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-md border border-base-200">
      {/* Image Skeleton */}
      <div className="skeleton h-60 w-full rounded-none"></div>

      <div className="card-body gap-3">
        {/* Title Skeleton */}
        <div className="space-y-2">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-2/3"></div>
        </div>

        {/* Stats Skeleton */}
        <div className="flex gap-2">
          <div className="skeleton h-3 w-10"></div>
          <div className="skeleton h-3 w-16"></div>
          <div className="skeleton h-3 w-12"></div>
        </div>

        {/* Price Skeleton */}
        <div className="skeleton h-8 w-24 mt-2"></div>

        {/* Button Skeleton */}
        <div className="skeleton h-12 w-full mt-2"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;