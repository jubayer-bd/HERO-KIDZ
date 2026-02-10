"use server";
import { ObjectId } from "mongodb";
import { dbcConnect, collections } from "@/lib/dbConnect";
export const getProducts = async () => {
  const products = await dbcConnect(collections.PRODUCTS).find().toArray();
  return products;
};

export const getSingleProduct = async (id) => {
  if (id.length != 24) {
    return {};
  }
  const query = { _id: new ObjectId(id) };
  const product = await dbcConnect(collections.PRODUCTS).findOne(query);
  return product || {};
};
