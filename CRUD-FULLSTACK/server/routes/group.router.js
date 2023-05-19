const { Router } = require("express");
const upload = require("../middlewares/upload.mw");
const GroupController = require("../controllers/group.controller");

const groupRouter = Router();

groupRouter.post("/", upload.single("imageGroup"), GroupController.createGroup);

groupRouter.get("/users/:idUser", GroupController.getUserGroups);

groupRouter.patch("/:idGroup", GroupController.addUserAtGroup);

groupRouter.get("/:idGroup/users", GroupController.getUsersInGroup);

groupRouter.patch(
  "/:idGroup/image",
  upload.single("imageGroup"),
  GroupController.addImage
);

module.exports = groupRouter;
