import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true},
    price: { type: String, required: true },
    stock: { type: String, required: true },
    supplierId: { type: String, required: true, unique: true },
}, { timestamps: true });

export default mongoose.model("user", userSchema);