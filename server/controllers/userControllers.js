// register
// api/users/register
const registerUser = async (req, res, next) => {
    res.json("register user")
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