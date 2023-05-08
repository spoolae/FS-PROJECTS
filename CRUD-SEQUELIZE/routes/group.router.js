const { Router } = require("express");
const upload = require("../middlewares/upload.mw");
const GroupController = require("../controllers/group.controller");

const groupRouter = Router();

groupRouter.post("/", upload.single("image"), GroupController.createGroup);

groupRouter.get("/users/:idUser", GroupController.getUserGroups);

groupRouter.patch("/:idGroup", GroupController.addUserAtGroup);

groupRouter.get("/:idGroup/users", GroupController.getUsersInGroup);

groupRouter.patch(
  "/:idGroup/image",
  upload.single("image"),
  GroupController.addImage
);

// update group
groupRouter.put(
  "/:idGroup",
  upload.single("image"),
  GroupController.updateGroup
);

// delete group
groupRouter.delete("/:idGroup", GroupController.deleteGroup);

// get group users count
groupRouter.get("/:idGroup/count", GroupController.getGroupUsersCount);

module.exports = groupRouter;
