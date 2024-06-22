const asynchandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc Register a user
//@route POST/api/users/register
//@access public
const registerUser  = asynchandler(async(req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are Mandatory!");
    }
    const userAvailable = await User.findOne({ email });
    if(userAvailable) {
        res.status(400);
        throw new Error("User already registered!");
    }

    
    res.json({ message: "Register the User"});
});

//@desc login user
//@route POST/api/users/login
//@access public
const loginUser  = asynchandler(async(req, res) => {
    res.json({ message: "Login User"});
});

//@desc current user info
//@route POST/api/users/current
//@access private
const currentUser  = asynchandler(async(req, res) => {
    res.json({ message: "Current User Information"});
});

module.exports = {registerUser, loginUser, currentUser};