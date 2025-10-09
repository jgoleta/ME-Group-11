import Product from "../models/product_model";

const updateStock = async (productId, updateStock) => {
    try {

        return await Product.findByIdAndUpdate(
            productId,
            {
                stock: updateStock
            },
            { new: true }
        );

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const decreaseStock = async (productId, updateStock) => {
    try {

        return await Product.findByIdAndUpdate(
            productId,
            {
                stock: updateStock
            },
            { new: true }
        );

    } catch (error) {
        res.status(500).json({error: error.message});

    }
}

const flagLowStock = async (productId) => {
    try {
        const product = await Product.findById(productId);

        if (product.stock < 10) {
            return res.status(200).json({message: `${product.name} stock is low`})
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
export default { updateStock, decreaseStock, flagLowStock };