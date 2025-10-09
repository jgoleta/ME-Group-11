import { updateStock, decreaseStock } from "../services/stocksServices.js";

export const UpdateStock = async (req, res) => {
    try {
        const productId = req.params.id;
        // expect body to contain { stock: number }
        const { stock } = req.body;

        const updatedProduct = await updateStock(productId, stock);

        return res.status(200).json(updatedProduct);
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
}

export const DecreaseStock = async (req, res) => {
    try {
        const productId = req.params.id;
        // expect body to contain { amount: number }
        const { amount } = req.body;

        const updatedProduct = await decreaseStock(productId, amount);

        return res.status(200).json(updatedProduct);
    } catch (error) {
        return res.status(500).json({error: error.message });
    }
}