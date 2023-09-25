import express from "express"
import { PORT, mongoURL } from "./config.js"
import mongoose from "mongoose"
import bookRoute from './routes/bookRoute.js'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
app.use('/',bookRoute)



mongoose.connect(mongoURL).then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
    console.log(PORT);
    });
    })
    .catch((error) => {
    console.log(error)
    })