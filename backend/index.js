//STARTING FILE OR THE MAIN FILE OF THE PROJECT...


import dotenv from "dotenv";//This makes it independent of Nodemon and ensures .env works everywhere (dev + prod).
import express from 'express'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import connectToDatabase from './Database/db_connection.js'

// TO ACCESS THE DATA FORM THE ENV FILE TO THE MAIN FILE WE HAVE ADDED  "start": "nodemon --env-file=.env index.js" IN PACKAGE.JSON

//--env-file=.env index.js -> It tells Nodemon: “Before starting Node, load environment variables from .env into process.env.”

dotenv.config();

connectToDatabase();
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoutes)
app.listen(process.env.PORT,() => {
    console.log(`Server is Running on port ${process.env.PORT}`)
})