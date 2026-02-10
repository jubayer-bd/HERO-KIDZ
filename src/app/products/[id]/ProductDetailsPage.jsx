"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaMinus,
  FaPlus,
  FaCheckCircle,
} from "react-icons/fa";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  // Price Calculation
    const discountedPrice = product.price - product.discount / 100;


  // Handlers
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" px-4 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* LEFT COLUMN: Image Section */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm">
            <Image
              width={200}
              height={200}
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
            {product.discount > 0 && (
              <div className="absolute top-4 left-4 badge badge-primary badge-lg font-bold">
                {product.discount}% OFF
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Product Info */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-base-content">
              {product.title}
            </h1>
            <p className="text-lg text-base-content/70 mt-1">
              {product.bangla}
            </p>

            {/* Ratings & Sold */}
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center text-warning gap-1">
                <FaStar />
                <span className="font-bold text-lg">{product.ratings}</span>
              </div>
              <span className="text-base-content/50">|</span>
              <span className="text-base-content/60 hover:text-primary cursor-pointer">
                {product.reviews} Reviews
              </span>
              <span className="text-base-content/50">|</span>
              <span className="badge badge-ghost">{product.sold} Sold</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-end gap-3 p-4 bg-base-200/50 rounded-xl">
            <span className="text-4xl font-black text-primary">
              ৳{discountedPrice}
            </span>
            {product.discount > 0 && (
              <div className="flex flex-col mb-1">
                <span className="text-sm text-base-content/50 line-through">
                  ৳{product.price}
                </span>
                <span className="text-xs text-success font-bold">
                  You save ৳{product.price - discountedPrice}
                </span>
              </div>
            )}
          </div>

          {/* Key Features (Info Tags) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.info.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-base-content/80"
              >
                <FaCheckCircle className="text-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="divider"></div>

          {/* Actions: Quantity & Cart */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Quantity */}
            <div className="join border border-base-300">
              <button
                onClick={handleDecrease}
                className="btn btn-ghost join-item px-4"
              >
                <FaMinus size={12} />
              </button>
              <button className="btn btn-ghost join-item no-animation cursor-default w-12 font-bold text-lg">
                {quantity}
              </button>
              <button
                onClick={handleIncrease}
                className="btn btn-ghost join-item px-4"
              >
                <FaPlus size={12} />
              </button>
            </div>

            {/* Add To Cart */}
            <button className="btn btn-primary flex-1 gap-2 text-white shadow-lg shadow-primary/30">
              <FaShoppingCart />
              Add to Cart
            </button>

            {/* Wishlist */}
            <button className="btn btn-outline btn-square border-base-300 text-error hover:bg-error hover:border-error hover:text-white">
              <FaHeart />
            </button>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-3">Description</h3>
            <p className="whitespace-pre-line text-base-content/80 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Q&A Accordion */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-3">Common Questions</h3>
            <div className="join join-vertical w-full">
              {product.qna.map((qa, index) => (
                <div
                  key={index}
                  className="collapse collapse-arrow join-item border border-base-300"
                >
                  <input
                    type="radio"
                    name="my-accordion-4"
                    defaultChecked={index === 0}
                  />
                  <div className="collapse-title text-lg font-medium">
                    {qa.question}
                  </div>
                  <div className="collapse-content">
                    <p className="text-base-content/70">{qa.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
