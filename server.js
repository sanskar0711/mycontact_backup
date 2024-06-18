//Let's test nodemon
//console.log("I am in Express Project.");

//Initializing Express
const express= require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

//console.log(process.env.CONNECTION_STRING);
const app=express();

//Initializing dotenv
const dotenv= require("dotenv").config();

const port= process.env.PORT || 5000;    

app.use(express.json());
app.use("/api/contacts", require("./Routes/contactRoutes"));
app.use(errorHandler);

connectDb();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


