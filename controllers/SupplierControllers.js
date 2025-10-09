import Supplier from '../models/Supplier.js';

export const createSupplier = async (req, res) => {
    try {
        const { name, contact, address } = req.body;
        const newSupplier = new Supplier({ name, contact, address });
        const savedSupplier = await newSupplier.save();
        res.status(201).json(savedSupplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

 
export const getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getSupplierById = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) {
            return res.status(404).json({ error: 'Supplier not found' });
        }
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateSupplier = async (req, res) => {
    try {
        const { name, contact, address } = req.body;
        const updatedSupplier = await Supplier.findByIdAndUpdate(
            req.params.id,
            { name, contact, address, new: true, runValidators: true },
        );
        if (!updatedSupplier) {
            return res.status(404).json({ error: 'Supplier not found' });
        }
        res.status(200).json(updatedSupplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteSupplier = async (req, res) => {
    try {
        const deletedSupplier = await Supplier.findByIdAndDelete(req.params.id);
        if (!deletedSupplier) {
            return res.status(404).json({ error: 'Supplier not found' });
        }
        res.status(200).json({ message: 'Supplier deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};