const { Group } = require("../models");
const createError = require("http-errors");

module.exports.checkGroup = async (req, res, next) => {
  try {
    const {
      params: { idGroup },
    } = req;
    const group = await Group.findByPk(idGroup);
    if (!group) {
      return next(createError(404, "Group not found"));
    }
    req.groupInstance = group;
    next();
  } catch (error) {
    next(error);
  }
};
