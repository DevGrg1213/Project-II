import express from "express"
import { getAllProduct, getProductById } from "../controller/productController.js";

const router = express.Router();

router.get("/",getAllProduct);

router.get("/:id",getProductById)

export default router;