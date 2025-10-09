import Product from "../models/product_model.js";

const createProduct = async (Product) => {
    return await Product.find();
}

const updateProduct = async (id, Product) => {
    return await Product.findByIdAndUpdate(id, Product, { new: true });
}

const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
}

export default {
    createProduct,
    updateProduct,
    deleteProduct
}