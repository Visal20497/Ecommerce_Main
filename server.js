import express from 'express'
import mongoose from 'mongoose'
import DbConnection from './config/db.js'
import morgan from 'morgan'
import dotenv from 'dotenv'
import authRoute from './route/authRoute.js'

let app=express()
// config
// this is for dotenv
dotenv.config({path:'.env'})

//this is for setting your body
app.use(express.json())

//this is for your morgan
app.use(morgan('dev'))

//this is for database
DbConnection()

let PORT=process.env.PORT;
let MODE=process.env.MODE
// console.log(process.env.MODE)


//auth Route 
app.use('/api/v1',authRoute)

app.listen(PORT,()=>{
    console.log(`server is started at http://localhost:${PORT} in ${MODE} mode`)
})
