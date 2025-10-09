export const ValidateStocks = (req, res, next) => {
    const { stock } = req.body;

    if (stock < 0) {
        return res.status(400).json({error: "Stock should not be a negative number"});
    }

    next();
};
