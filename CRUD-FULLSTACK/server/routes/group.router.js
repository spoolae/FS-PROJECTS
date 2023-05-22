const { Router } = require("express");
const upload = require("../middlewares/upload.mw");
const GroupController = require("../controllers/group.controller");
const { checkGroup } = require("../middlewares/group.mw");

const groupRouter = Router();

groupRouter.post("/", upload.single("image"), GroupController.createGroup);

groupRouter.get("/users/:idUser", GroupController.getUserGroups);

groupRouter.patch(
  "/:idGroup",
  [checkGroup, upload.single("image")],
  GroupController.addUserAtGroup
);

groupRouter.get("/:idGroup/users", GroupController.getUsersInGroup);

groupRouter.patch(
  "/:idGroup/image",
  upload.single("image"),
  GroupController.addImage
);

groupRouter.put(
  "/:idGroup",
  [checkGroup, upload.single("image")],
  GroupController.updateGroup
);

groupRouter.delete("/:idGroup", checkGroup, GroupController.deleteGroup);

groupRouter.get("/:idGroup/count", GroupController.getGroupUsersCount);

module.exports = groupRouter;
