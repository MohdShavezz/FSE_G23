import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'))

app.use("/api/product", productRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));
  
app.listen(process.env.PORT, () => {
  console.log("Server running on port ",process.env.PORT);
});