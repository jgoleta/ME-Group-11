import ProductService from "../services/new_product.js";

export const createProduct = async (req, res) => {
    try {
        const Product = await ProductService.createProduct(req.body);
        res.status(201).json(Product);
    } catch (error) {
        res.status(500).json({ message: "Error creating Product", error });
    } 
};

export const updateProduct = async (req, res) => {
    try {
        const Product = await ProductService.updateProduct(req.params.id, req.body);
        if (!Product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(Product);
    } catch (error) {
        res.status(500).json({ message: "Error updating Product", error });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const Product = await ProductService.deleteProduct(req.params.id);
        if (!Product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting Product", error });
    }
};