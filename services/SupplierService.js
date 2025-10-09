import Supplier from "../models/Supplier";

const addSupplier = async (supplierData, productId) => {
    const newSupplier = new Supplier({...supplierData, contact, productId,});
    return await newSupplier.save();
};

const updateSupplier = async (supplierId, updateData) => {
    return await Supplier.findByIdAndUpdate(supplierId, updateData, { new: true,  runValidators: true });
}

const deleteSupplier = async (supplierId) => {
    return await Supplier.findByIdAndDelete(supplierId);
}

const getSupplierById = async (supplierId) => {
    return await Supplier.findById(supplierId).populate('productId');
}

const getAllSuppliers = async () => {
    return await Supplier.find().populate('productId');
};

export { addSupplier, updateSupplier, deleteSupplier , getSupplierById, getAllSuppliers };

