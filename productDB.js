require('dotenv').config();
const ProductJson = require('./product.json');
const connectDB = require('./db/connect');
const Product= require('./models/product');

const start=async()=>{
    try{
         await connectDB(process.env.MDB_URL);
         await Product.deleteMany();
         await Product.create(ProductJson);
         
    }
    catch(er){
        console.log(er);
    }
}

start();
