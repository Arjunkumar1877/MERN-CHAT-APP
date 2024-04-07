import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import userRoutes from './routes/user.routes.js'
import { dbConnect } from './db/connectMongoDb.js';
import cookieParser from 'cookie-parser';
import { app, server } from './socket/socket.js';
dotenv.config();
const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser())


app.use('/api/auth', authRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/users', userRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})



server.listen(PORT, ()=>{
    dbConnect();
    console.log(`server connected on ${PORT}`);
});