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

const flagLowStock = async (req, res, next) => {

    const product = await Product.findById(req.params);

        if (product.stock < 10) {
            return res.status(200).json({message: `${product.name} stock is low`})
        }

    next();
}

export default { updateStock, decreaseStock, flagLowStock };