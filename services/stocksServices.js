import Product from "../models/product_model";

const addStock = async (req, res) => {
    try {
        const productId = req.params;
        const updateStock = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            {
                stock: updateStock
            },
            { new: true }
        );

        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const decreaseStock = async (res, res) => {
    try {
        const productId = req.params;
        const updateStock = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            {
                stock: updateStock
            },
            { new: true }
        );

        res.status(200).json(updatedProduct)
    } catch (error) {
        
    }
}

export default { addStock, decreaseStock };