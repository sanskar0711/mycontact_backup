const asynchandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });

    console.log(`User created ${user}`);
    if(user){
        res.status(201).json({_id: user.id, email: user.email });
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.json({ message: "Register the User"});
});

//@desc login user
//@route POST/api/users/login
//@access public
const loginUser  = asynchandler(async(req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are Mandatory!");
    }
    const user = await User.findOne({email});
    //compare password with hashed password
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign(
            {
                user: {                    //payload that is gonna be embedded in the token
                    username: user.username,
                    email: user.email,
                    id: user.id
                },
            }, 
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1m" }
        );
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Email or password is not valid");
    }
});

//@desc current user info
//@route POST/api/users/current
//@access private
const currentUser  = asynchandler(async(req, res) => {
    res.json({ message: "Current User Information"});
});

module.exports = {registerUser, loginUser, currentUser};