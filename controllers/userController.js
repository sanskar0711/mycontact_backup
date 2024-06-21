const asynchandler = require("express-async-handler");


//@desc Register a user
//@route POST/api/users/register
//@access public
const registerUser  = asynchandler(async(req, res) => {
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