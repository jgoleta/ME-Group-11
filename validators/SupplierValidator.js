export const validateSupplier = (req, res, next) => {
    const { name, contact, address } = req.body;
    if (!name || !contact || !address) {
        return res.status(400).json({ error: "Name, contact, and address are required." });
    }
    next();
};