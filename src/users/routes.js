const {Router} = require("express");
const userRouter = Router();

const {registerUser, login, updateUser, deleteUser} = require("./controllers")
const {hashPassword, hashUpdatePassword, comparePassword} = require("../middleware/index")

userRouter.post("/users/register", hashPassword, registerUser);
userRouter.post("/users/password", comparePassword, login);
userRouter.put("/users/update", comparePassword, hashUpdatePassword, updateUser);
userRouter.delete("/users/delete", comparePassword, deleteUser);

module.exports = userRouter;
