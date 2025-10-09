import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import supplierRoutes from "./routes/SupplierRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import stockRoutes from "./routes/StockRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

// route registration should happen after app and middleware are set up
app.use('/suppliers', supplierRoutes);
app.use('/products', productRoutes);
app.use('/stocks', stockRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connected");
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server running on port ${process.env.PORT || 4000}`);
    });
    }).catch(err => 
        console.error("MongoDB connection error:", err));