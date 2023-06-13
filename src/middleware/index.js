const bcrypt = require("bcrypt");
const User = require("../users/model")


async function hashPassword (req, res, next) {

    const hashedPassword = await bcrypt.hash(req.body.password, parseInt(process.env.SALTROUNDS));
    req.body.password = hashedPassword;
    next();
}

async function hashUpdatePassword (req, res, next) {

    const hashedPassword = await bcrypt.hash(req.body.updatePassword, parseInt(process.env.SALTROUNDS));
    req.body.updatePassword = hashedPassword;
    next();
}

async function comparePassword (req, res, next) {
    const userEntry = await User.findOne({username: req.body.username})
    const compareCheck = await bcrypt.compare(req.body.password, userEntry.password)

    if (compareCheck == false) {
        res.status(500).send({message: "Username or password is incorrect."})
    } else {
        next();
    }
}

module.exports = {
    hashPassword,
    hashUpdatePassword,
    comparePassword
}