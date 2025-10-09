import express from 'express';
import { getAllSuppliers, createSupplier, getSupplierById, updateSupplier, deleteSupplier } from '../controllers/SupplierController.js';
import { validateSupplier } from '../validators/SupplierValidator.js';

const router = express.Router();

router.get('/suppliers', getAllSuppliers);
router.post('/suppliers', validateSupplier, createSupplier);
router.get('/:id', getSupplierById);
router.put('/:id', validateSupplier, updateSupplier);
router.delete('/:id', deleteSupplier);

export default router;