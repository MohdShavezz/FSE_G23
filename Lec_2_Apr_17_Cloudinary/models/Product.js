import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  images: [{
    url: String,
    public_id: String,
  }],
}, { timestamps: true });

export const Product= mongoose.model("Product", productSchema);