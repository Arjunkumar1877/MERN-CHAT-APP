import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async(req, res, next)=>{
   try {
    const token = req.cookies.jwt;

    if(!token){
        return res.status(401).json({error: "Unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.userId).select("-password");

    if(!user){
        return res.status(401).json({error: "User not found" });
    }

    req.user = user;
    next();

    if(!decoded){
        return res.status(401).json({error: "Unauthorized - Invalid Token" });
    }
   } catch (error) {
    console.log("Error in protuctedRoute middleware: ", error.message);
    res.status(500).json({error: "Internal server error"})
   }
}

export default protectRoute;