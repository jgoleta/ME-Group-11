import express from "express";
import { createProduct, updateProduct, deleteProduct, getProduct } from "../controllers/productController.js";
import { validateProduct } from "../validators/product_input.js";

const router = express.Router();

router.get("/", getProduct);
router.post("/", validateProduct, createProduct);
router.put("/:id", validateProduct, updateProduct);
router.delete("/:id", deleteProduct);

export default router;
