import Product from "../models/product_model.js";

const updateStock = async (productId, newStock) => {
    try {
        // productId expected to be the id string
        return await Product.findByIdAndUpdate(
            productId,
            { stock: newStock },
            { new: true }
        );

    } catch (error) {
        // Service functions should throw and let controllers handle responses
        throw new Error(error.message || 'Failed to update stock');
    }
}

const decreaseStock = async (productId, amount) => {
    try {
        // Decrease stock by amount
        const product = await Product.findById(productId);
        if (!product) throw new Error('Product not found');

        product.stock = (product.stock || 0) - amount;
        if (product.stock < 0) product.stock = 0;

        await product.save();
        return product;

    } catch (error) {
        throw new Error(error.message || 'Failed to decrease stock');

    }
}

const flagLowStock = async (productId) => {
    const product = await Product.findById(productId);
    if (!product) return null;
    if (product.stock < 5) {
        return { message: `${product.name} stock is low, Please Restock` };
    }
    return null;
}

export { updateStock, decreaseStock, flagLowStock };