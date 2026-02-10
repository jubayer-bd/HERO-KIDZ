import React from "react";
import ProductCard from "../cards/ProductCard";
import { getProducts } from "@/actions/Server/Product";

const Products = async () => {
  const products = (await getProducts()) || [];
  const safeProducts = products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {safeProducts.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
