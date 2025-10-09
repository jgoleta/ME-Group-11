import express from 'express';
import { getSuppliers, createSupplier, getSupplierById, updateSupplier, deleteSupplier } from '../controllers/SupplierControllers.js';
import { validateSupplier } from '../validators/SupplierValidator.js';

const router = express.Router();

router.get('/', getSuppliers);
router.post('/', validateSupplier, createSupplier);
router.get('/:id', getSupplierById);
router.put('/:id', validateSupplier, updateSupplier);
router.delete('/:id', deleteSupplier);

export default router;