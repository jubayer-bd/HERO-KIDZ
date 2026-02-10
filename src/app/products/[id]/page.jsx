import { getSingleProduct } from "@/actions/Server/Product";
import React from "react";
import ProductDetails from "./ProductDetailsPage";

const page = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const product = (await getSingleProduct(id)) || {};

  const safeProduct = {
    ...product,
    _id: product._id ? product._id.toString() : null,
  };
  console.log(safeProduct);
  return (
    <div className="max-w-7xl mx-auto px-4">
      <ProductDetails product={safeProduct} />
    </div>
  );
};

export default page;
