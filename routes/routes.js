const express=require('express');
const router=express.Router() //router is ready now
const signUpTemplatecopy=require('../model/Signupmodel');//table attach

router.post("/signup",(request,response)=>
{
    const sam=new signUpTemplatecopy({
        fullName:request.body.fullName, //fullname(front end from name=function)
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
    })
    sam.save().then(data=>
    {
        response.json(data);

        console.log('Data added successfully');
    }).catch(error=>
    {
        response.json(error)
    })
})


module.exports=router;