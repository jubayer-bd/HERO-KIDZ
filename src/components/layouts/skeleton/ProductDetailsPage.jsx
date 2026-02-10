import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* LEFT: Image Skeleton */}
        <div>
          <div className="skeleton w-full aspect-square rounded-2xl"></div>
          {/* Optional: Thumbnails row if you add them later */}
          <div className="flex gap-4 mt-4">
             <div className="skeleton w-20 h-20 rounded-lg"></div>
             <div className="skeleton w-20 h-20 rounded-lg"></div>
             <div className="skeleton w-20 h-20 rounded-lg"></div>
          </div>
        </div>

        {/* RIGHT: Info Skeleton */}
        <div className="space-y-6">
          
          {/* Title Area */}
          <div className="space-y-4">
            <div className="skeleton h-10 w-3/4"></div> {/* Main Title */}
            <div className="skeleton h-6 w-1/2"></div> {/* Bangla Title */}
            
            {/* Ratings */}
            <div className="flex gap-4">
              <div className="skeleton h-5 w-24"></div>
              <div className="skeleton h-5 w-24"></div>
            </div>
          </div>

          {/* Price Box */}
          <div className="skeleton h-24 w-full rounded-xl"></div>

          {/* Features List */}
          <div className="grid grid-cols-2 gap-3">
             <div className="skeleton h-4 w-full"></div>
             <div className="skeleton h-4 w-full"></div>
             <div className="skeleton h-4 w-3/4"></div>
             <div className="skeleton h-4 w-3/4"></div>
          </div>

          <div className="divider"></div>

          {/* Action Buttons */}
          <div className="flex gap-4 h-12">
            <div className="skeleton w-32 h-full rounded-btn"></div> {/* Qty */}
            <div className="skeleton flex-1 h-full rounded-btn"></div> {/* Add to Cart */}
            <div className="skeleton w-12 h-full rounded-btn"></div> {/* Wishlist */}
          </div>

          {/* Description Lines */}
          <div className="space-y-3 mt-8">
            <div className="skeleton h-6 w-32 mb-2"></div> {/* Header */}
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-5/6"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>

          {/* Q&A Accordion Box */}
          <div className="space-y-2 mt-8">
             <div className="skeleton h-16 w-full rounded-box"></div>
             <div className="skeleton h-16 w-full rounded-box"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;