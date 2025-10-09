import express from "express";
import { createProduct, updateProduct, deleteProduct, getProduct, searchProducts } from "../controllers/productController.js";
import { validateProduct } from "../validators/product_input.js";
const { authenticate, authorizeRoles } = require('../middleware/Restriction.js');

const router = express.Router();

router.get("/", getProduct);
router.get("/search", searchProducts);
router.post("/", authenticate, authorizeRoles('staff', 'admin'), validateProduct, createProduct);
router.put("/:id", authenticate, authorizeRoles('staff', 'admin'), validateProduct, updateProduct);
router.delete("/:id", authenticate, authorizeRoles('staff', 'admin'), deleteProduct);

export default router;
