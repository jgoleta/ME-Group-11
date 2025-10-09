export const validateUser = (req, res, next) => {
    console.log(req);
    const { name, price } = req.body;

    if (!name || !price ) {
        return res.status(400).json({ message: "All fields are required." });
    }
    next();
};