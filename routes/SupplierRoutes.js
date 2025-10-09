import express from 'express';
import { getAllSuppliers, createSupplier, getSupplierById, updateSupplier, deleteSupplier } from '../controllers/SupplierController.js';
import { validateSupplier } from '../validators/SupplierValidator.js';
const { authenticate, authorizeRoles } = require('../middleware/Restriction.js');

const router = express.Router();

router.get('/', getAllSuppliers);
// Only staff and admin can create/update/delete suppliers
router.post('/', authenticate, authorizeRoles('staff', 'admin'), validateSupplier, createSupplier);
router.get('/:id', getSupplierById);
router.put('/:id', authenticate, authorizeRoles('staff', 'admin'), validateSupplier, updateSupplier);
router.delete('/:id', authenticate, authorizeRoles('staff', 'admin'), deleteSupplier);

export default router;