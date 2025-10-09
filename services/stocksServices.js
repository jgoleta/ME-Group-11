import Product from "../models/product_model";

const addStock = async (productId, updateStock) => {
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

export default { addStock, decreaseStock };