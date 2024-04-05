import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js'
import { dbConnect } from './db/connectMongoDb.js';
dotenv.config();
const app = express();


const PORT = process.env.PORT || 3000;
app.get("/", (req, res)=>{
    console.log("first")
    res.send("server is running");
});


app.use('/api/auth', authRouter)



app.listen(PORT, ()=>{
    dbConnect();
    console.log(`server connected on ${PORT}`);
});