import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import { dbConnect } from './db/connectMongoDb.js';
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser())


app.use('/api/auth', authRoutes)
app.use('/api/message', messageRoutes)



// app.get("/", (req, res)=>{
//     console.log("first")
//     res.send("server is running");
// });




app.listen(PORT, ()=>{
    dbConnect();
    console.log(`server connected on ${PORT}`);
});