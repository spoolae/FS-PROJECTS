const { Router } = require("express");
const upload = require("../middlewares/upload.mw");
const GroupController = require("../controllers/group.controller");
const { checkGroup } = require("../middlewares/group.mw");

const groupRouter = Router();

//Create
groupRouter.post("/", upload.single("image"), GroupController.createGroup);

//Read
groupRouter.get("/:idGroup/users", GroupController.getUsersInGroup);

groupRouter.get("/users/:idUser", GroupController.getUserGroups);

//Update
groupRouter.patch("/:idGroup", checkGroup, GroupController.addUserAtGroup);

groupRouter.patch(
  "/:idGroup/image",
  checkGroup,
  upload.single("image"),
  GroupController.addImage
);

groupRouter.put(
  "/:idGroup",
  checkGroup,
  upload.single("image"),
  GroupController.updateGroup
);

//Delete
groupRouter.delete("/:idGroup", checkGroup, GroupController.deleteGroup);

//Get group users count
groupRouter.get("/:idGroup/count", GroupController.getGroupUsersCount);

module.exports = groupRouter;
