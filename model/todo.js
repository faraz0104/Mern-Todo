import mongoose from "mongoose"
const Schema= mongoose.Schema

const todoSchema = new Schema({
    text: {
        type: String,
        required: true
    }
   
},{timestamps:true});
const ToDo=mongoose.model("ToDo",todoSchema)
export default ToDo