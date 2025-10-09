import Supplier from "../models/Supplier";

const addSupplier = async (supplierData, productId) => {
    const newSupplier = new Supplier({...supplierData, contact, productId,});
    return await newSupplier.save();
};

export { addSupplier };