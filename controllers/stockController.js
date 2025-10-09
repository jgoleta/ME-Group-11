import { addStock, decreaseStock } from "../services/stocksServices";

export const AddStock = async (req, res) => {
    try {
        const ProductId = req.params
        const updatedStock = req.body

        const updatedProduct = await addStock(ProductId, updatedStock)

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