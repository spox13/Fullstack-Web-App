const HttpError = require("../models/errorModel")
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')

// register
// api/users/register
const registerUser = async (req, res, next) => {
    try {

        const {name, email, password, password2} = req.body;
        if(!name || !email || !password) {
            return next(new HttpError("Fill in all fields", 422))
        }

        const newEmail = email.toLowerCase()

        const emailExists = await User.findOne({email: newEmail})
        if(emailExists) {
            return next(new HttpError("Email already exists", 422))
        }

        if((password.trim()).length < 6) {
            return next(new HttpError("Password should be atleast 6 characters", 422))
        }

        if(password != password2) {
            return next(new HttpError("Password dont match", 422))
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt);
        const newUser = await User.create({name, email: newEmail, password: hashedPass})
        res.status(201).json(`New user ${newUser.email} registered`)

    } catch (error) {
        return next(new HttpError("Registration failed.", 422))
    }
}

// login
// api/users/login
const loginUser = async (req, res, next) => {
    res.json("login user")
}

// user
// api/users/:id
const getUser = async (req, res, next) => {
    res.json("get user")
}

// changing avatar
// api/users/change-avatar
const changeAvatar = async (req, res, next) => {
    res.json("change avatar")
}

// edit usera
// api/users/edit-user
const editUser = async (req, res, next) => {
    res.json("edit user")
}

// author
// api/users/authors
const getAuthors = async (req, res, next) => {
    res.json("get authors")
}

module.exports = {registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors}