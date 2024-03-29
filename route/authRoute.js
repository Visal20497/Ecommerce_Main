import express from "express";
import { loginController, registerController, restPasswordHandler } from "../contorller/authController.js";
import { isAdmin, isRequire } from "../middleware/authMiddleware.js";
let route=express.Router()
//Register || POST
route.post('/register',registerController)

// Login  || POST
route.post('/login',loginController)
// auth-user || get
route.get('/auth-user',isRequire,isAdmin,(req,res)=>{
    res.send({ok:true})
})

//Reset the password || Post
route.post('/reset-password',restPasswordHandler)

//auth-route for admin  || get 
route.get("/admin-auth-route",isRequire,isAdmin,(req,res)=>{
    res.send({ok:true})
})

export default route;
