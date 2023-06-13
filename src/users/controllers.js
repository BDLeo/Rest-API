const User = require("./model")

async function registerUser (req, res) {
    try {
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
    })
    res.status(201).send({message: "Account successfully created.", user: req.body.Username})
    } catch (error) {
        console.log(error)
        res.status(501).send({message: error.message})
    }
}

async function updateUser (req, res) {
    try {
        await User.findOneAndUpdate({username: req.body.username}, {
            username: req.body.updateUsername,
            email: req.body.updateEmail,
            password: req.body.updatePassword,
    })
    res.status(200).send({message: "Account successfully updated."})
    } catch (error) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
}

async function login (req, res) {
    try {
        res.status(200).send({message: "Login successful"})
    } catch (error) {
        console.log(error)
    }
}

async function deleteUser (req, res) {
    try {
        await User.findOneAndDelete({username: req.body.username})
        res.status(200).send({message: "User successfully removed from database."})
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

module.exports = {registerUser, login, updateUser, deleteUser};