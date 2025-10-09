import express from 'express';

import { ValidateStocks } from '../validators/stockValidator';
import { UpdateStock } from '../controllers/stockController';

const router = express.Router();

router.put("/api/products/:id/stock", ValidateStocks, UpdateStock);
