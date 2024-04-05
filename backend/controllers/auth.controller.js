import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async(req,res)=>{
    const { fullName, username, password, confirmPassword, gender} = req.body
    console.log(req.body)
   try {
    if(password !== confirmPassword){
        return res.status(400).json({error: "password and Confirm Password do not match !"});
    }

    const user = await User.findOne({username: username});
    if(user){
        return res.status(400).json({error: "User already exists"});
    }

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const salt = await bcryptjs.genSalt(10);
    const hashedpass = await bcryptjs.hash(password, salt)
    const newUser = new User({
        fullName,
        username,
        password: hashedpass,
        gender,
        profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
    });


 if(newUser){
    const userSaved =  await newUser.save();
   generateTokenAndSetCookie(newUser._id, res);
    const { password: pass, ...resData} = userSaved._doc;
    console.log(resData, "👏😁♥")
 
     res.status(200).json(resData);
 }else{
    res.status(400).json({error: "Invalid user data"});
 }

   } catch (error) {
    console.log(error.message)
   }
}


export const login = async(req,res)=>{
    console.log("login route")
}


export const logout = async(req, res)=>{
    console.log("logout route")
}