import Product from "../models/product_model.js";
import Supplier from "../models/Supplier.js";

const getAllProducts = async () => {
    return await Product.find();
}

const createProduct = async (productData) => {
    const product = new Product(productData);
    return await product.save();
}

const updateProduct = async (id, productData) => {
    return await Product.findByIdAndUpdate(id, productData, { new: true });
}

const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
}

const searchProducts = async (searchQuery) => {
    const { name, supplierName } = searchQuery;
    
    let query = {};
    
    if (name) {
        query.name = { $regex: name, $options: 'i' };
    }
    
    if (supplierName) {
        const suppliers = await Supplier.find({
            name: { $regex: supplierName, $options: 'i' }
        });
        
        const supplierIds = suppliers.map(supplier => supplier._id.toString());
        
        if (supplierIds.length > 0) {
            query.supplierId = { $in: supplierIds };
        } else {
            return [];
        }
    }
    
    if (!name && !supplierName) {
        return await Product.find();
    }
    
    return await Product.find(query);
}

export default {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts
}