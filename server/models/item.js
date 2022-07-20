import mongoose from 'mongoose';
const itemSchema = mongoose.Schema({
    title:String,
    image:String
})
const Item = mongoose.model('Item',itemSchema);
export default Item;


