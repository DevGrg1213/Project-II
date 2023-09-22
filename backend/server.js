import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import products from "./data/products.js";
dotenv.config();

connectDB();
const app = express();


app.get("/api/products",(req,res) =>{
    res.json(products);
})

app.get("/api/products/:id",(req,res) =>{
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
})
app.listen(process.env.PORT,()=>{
    console.log(`server started at port ${process.env.PORT}`)
})