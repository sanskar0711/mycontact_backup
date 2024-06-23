const asynchandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all Contacts
//@route GET/api/contacts
//@access private
const getContacts = asynchandler(async(req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
});

//@desc Create New Contact
//@route POST/api/contacts
//@access private
const createContact = asynchandler(async(req, res) => {
    console.log("The Request body is :", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All Fields are Mandatory");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });

    res.status(201).json(contact);
}); 

//@desc GET Contact
//@route GET/api/contacts/:id
//@access private
const getContact = asynchandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//@desc UPDATE Contact
//@route PUT/api/contacts/:id
//@access private
const updateContact = asynchandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedContact);
});

//@desc DELETE Contact
//@route DELETE/api/contacts/:id
//@access private
const deleteContact = asynchandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    await Contact.deleteOne({ _id: req.params.id });
    //await Contact.remove();
    res.status(200).json(contact);
});


module.exports = {
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact
};
