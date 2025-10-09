import { updateStock, decreaseStock } from "../services/stocksServices";

export const UpdateStock = async (req, res) => {
    try {
        const ProductId = req.params
        const updatedStock = req.body

        const updatedProduct = await updateStock(ProductId, updatedStock)

        return res.status(200).json(updatedProduct);
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
}

export const DecreaseStock = async (req, res) => {
    try {
        const ProductId = req.params
        const updatedStock = req.body

        const updatedProduct = await decreaseStock(ProductId, updatedStock)

        return res.status(200).json(updatedProduct);
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
}