import express from 'express';

import { ValidateStocks } from '../validators/stockValidator.js';
import { UpdateStock } from '../controllers/stockController.js';

const router = express.Router();

router.put("/products/:id", ValidateStocks, UpdateStock);

export default router;
