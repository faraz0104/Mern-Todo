
import express from "express";
import mongoose from 'mongoose';
import Cors from "cors"
import routes from "./routes/TodoRoutes.js"



const app = express()
//convert to json;
app.use(express.json())

app.use(Cors())

// Routes
app.use(routes);




mongoose.connect("mongodb+srv://faraz:12345@cluster0.lkjvp.mongodb.net/MernTodo?retryWrites=true&w=majority", {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})


app.listen(5050,()=>{
    console.log("hello")
})

// Routes
app.use(routes);