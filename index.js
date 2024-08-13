const express =  require("express");
const productRoutes=require("./routes/productRoutes")
const userRoutes=require("./routes/userRoutes")
const cartRoutes=require("./routes/cartRoutes")
const orderRoutes=require("./routes/orderRoutes")
const app=express();

const mongoose=require('mongoose');
const cors=require('cors');
app.use(express.json());
mongoose.connect(
   "mongodb+srv://vaishnavis2022eee:8GQE5U4L7sfLu6DY@cluster0.xe6mxsp.mongodb.net/Ecommerce"
).then(()=>{
    console.log("Connected to database");
})
app.use(cors());
app.use("/products",productRoutes);
app.use("/user",userRoutes);
app.use("/cart",cartRoutes);
app.use("/order",orderRoutes);


app.listen(1000,()=>{
    console.log("Server is running on port 3000");
})
