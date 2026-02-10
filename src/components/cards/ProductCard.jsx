"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({ product }) => {
console.log(product);
 const hasDiscount = product.price - product.discount / 100;
  const discountedPrice = product.price - product.discount / 100;
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="card card-compact bg-base-100 shadow-xl border border-base-200 overflow-hidden group"
    >
      {/* Product Image */}
      <figure className="relative h-60 w-full bg-gray-100 overflow-hidden">
        <Image 
        width={200}
        height={200}
          src={product.image}
          alt={product.title}
          className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
        />
        {hasDiscount && (
          <div className="absolute top-3 left-3 badge badge-primary font-bold p-3 shadow-sm">
            {product.discount}% OFF
          </div>
        )}
      </figure>

      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-sm md:text-base leading-tight line-clamp-2 h-12">
          {product.title}
        </h2>

        {/* Ratings & Sold Stats */}
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center text-warning text-xs">
            <FaStar className="mr-1" />
            <span className="font-bold text-base-content">{product.ratings}</span>
          </div>
          <span className="text-[11px] text-base-content/50">
            ({product.reviews} Reviews)
          </span>
          <div className="divider divider-horizontal m-0 h-3"></div>
          <span className="text-[11px] text-base-content/50">
            {product.sold} Sold
          </span>
        </div>

        {/* Pricing Section */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-2xl font-black text-primary">
            ৳{product.price}
          </span>
          {hasDiscount && (
            <span className="text-sm line-through text-base-content/40">
              ৳{discountedPrice}
            </span>
          )}
        </div>

        {/* Action Button */}
        <div className="card-actions mt-4 ">
          <Link href={`/products/${product._id}`}  className="btn btn-primary btn-block gap-2 text-white hover:shadow-lg transition-all">
            <FaShoppingCart />
            Add to Cart
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;