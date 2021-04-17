const express=require("express")
const mongoose=require("mongoose")
const shortid=require("shortid")
const bodyParser=require("body-parser")
const app=express()
const uri = "mongodb+srv://shubham:shubham123@cluster0.ouov6.mongodb.net/Profile?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json())
const Product=mongoose.model("product",new mongoose.Schema({
    _id:{type:String,default:shortid.generate},
    image: String,
    title:String,
    description:String,
    availableSizes: [String],
    price:Number    
}));

app.get('/api/products',async (req,res)=>{
    const products=await Product.find({});
    res.send(products)
})

app.post("/api/products",async(req,res)=>{
    const newProduct=new Product(req.body)
    const savedProduct=await newProduct.save();
    res.send(savedProduct)
})

app.delete("/api/products/:id",async(req,res)=>{
    const deletedProduct=await Product.findByIdAndDelete(req.params.id)
    res.send(deletedProduct)
})

app.listen(4000,()=>{
    console.log("connected")
})