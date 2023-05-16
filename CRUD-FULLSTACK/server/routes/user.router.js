const { Router } = require("express");
const UserController = require("../controllers/user.controller");
const { checkUser } = require("../middlewares/user.mw");
const { paginate } = require("../middlewares/paginate.mw");

const userRouter = Router();

userRouter
  .route("/")
  .post(UserController.createUser)
  .get(paginate, UserController.getAllUsers);

userRouter.get("/count", UserController.getUsersCount);

userRouter.get("/:idUser", checkUser, UserController.getUserByPk);
userRouter.put("/:idUser/static", UserController.updateUserStatic);
userRouter.put(
  "/:idUser/instance",
  checkUser,
  UserController.updateUserInstance
);
userRouter.delete(
  "/:idUser/instance",
  checkUser,
  UserController.deleteUserInstance
);

module.exports = userRouter;
