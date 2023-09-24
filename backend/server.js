import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js"
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
dotenv.config();

connectDB();
const app = express();

app.use("/api/products", productRouter);
app.use(notFound);
app.use(errorHandler);
app.listen(process.env.PORT,()=>{
    console.log(`server started at port ${process.env.PORT}`)
})