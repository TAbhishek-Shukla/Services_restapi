
const mongoose= require('mongoose');

const url=process.env.MDB_URL || 4000;

const connectDB= ()=>{
   try{
    mongoose.connect(`${url}`);
   }
   catch(er){
    console.log(er);
   }
}

module.exports= connectDB;