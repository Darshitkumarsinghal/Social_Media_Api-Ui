const express = require('express')
const app = express()
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan=require('morgan');
const dotenv = require('dotenv');
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex: true},() =>{
    console.log('connect to MONGODB')
})

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);



    app.listen(8800,()=>{
    console.log('server  is running')
})