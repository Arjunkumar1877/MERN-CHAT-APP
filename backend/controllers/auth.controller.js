

export const signup = async(req,res)=>{
    const { fullName, username, password, confirmPassword, gender} = req.body
    res.json("signed up")
    console.log(req.body)
console.log("sign up iuuser")
}


export const login = async(req,res)=>{
    console.log("login route")
}


export const logout = async(req, res)=>{
    console.log("logout route")
}