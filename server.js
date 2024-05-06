const express=require('express');
// const { default:mongoose } = require('mongoose');

const app=express();
const mongoose=require('mongoose');
const routerurl=require('./routes/routes'); //router=schema

const cors=require('cors');

app.use(express.json());  // middleware
app.use(cors())

app.use("/app",routerurl);

if(mongoose.connect('mongodb+srv://anithabalraj11:Sarathkumar@cluster0.vapylh2.mongodb.net/login-db?retryWrites=true&w=majority&appName=Cluster0'))

{
    console.log('database is connected');
}



app.listen(4000,()=>
{
    console.log('Server is ready');
})

