import dotnev from "dotenv"
import mongoose from "mongoose"
import products from "./data/products.js"
import users from "./data/users.js"
import User from "./models/UserModel.js"
import Product from "./models/ProductModel.js"
import Order from "./models/OrderModel.js"
import connectDB from "./config/db.js"

dotnev.config();
connectDB();

const insertData = async () =>{
    try{
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleProduct = products.map(product =>{
            return {...product,user:adminUser};
        });

        await Product.insertMany(sampleProduct);
        console.log("Data Imported sucessfully!!!!");
        process.exit();
        
    }
    catch(error){
        console.log(error.message);
        process.exit(1);

    }
}

const deleteData = async () =>{
   try{
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    console.log("Data deleted sucessfully");
    process.exit();
   }catch(error){
    console.log(error.message)
    process.exit(1);
   }
}

if(process.argv[2] === "-d/"){
    deleteData();
}else{
    insertData();
}