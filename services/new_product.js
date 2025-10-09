import Product from "..\models\product_model.js";

const addnewProduct = async () => {
    return await Product.find();
}
export default {
    addnewProduct
}