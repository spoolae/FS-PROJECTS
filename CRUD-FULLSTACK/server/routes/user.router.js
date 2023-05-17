const { Router } = require("express");
const UserController = require("../controllers/user.controller");
const { checkUser } = require("../middlewares/user.mw");
const { paginate } = require("../middlewares/paginate.mw");

const userRouter = Router();

//Create
userRouter
  .route("/")
  .post(UserController.createUser)
  .get(paginate, UserController.getAllUsers);

//Get count
userRouter.get("/count", UserController.getUsersCount);

//Read
userRouter.get("/:idUser", checkUser, UserController.getUserByPk);

//Update
userRouter.put("/:idUser", checkUser, UserController.updateUser);

//Delete
userRouter.delete("/:idUser", checkUser, UserController.deleteUser);

module.exports = userRouter;
