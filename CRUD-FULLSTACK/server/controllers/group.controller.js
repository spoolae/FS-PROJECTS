const _ = require("lodash");
const createError = require("http-errors");
const { Group, User } = require("../models");

const pickBody = (body) =>
  _.pick(body, ["title", "imagePath", "description", "isPrivate"]);

module.exports.createGroup = async (req, res, next) => {
  try {
    const {
      body,
      file: { filename },
    } = req;
    const values = pickBody(body);
    const newGroup = await Group.create({ ...values, imagePath: filename });
    const user = await User.findByPk(body.userId, {
      attributes: {
        exclude: ["password"],
      },
    });
    if (!user) {
      return next(createError(404, "User not found"));
    }
    await newGroup.addUser(user);
    res.status(201).send({ data: newGroup });
  } catch (error) {
    next(error);
  }
};

module.exports.addImage = async (req, res, next) => {
  try {
    const {
      file: { filename },
      params: { idGroup },
    } = req;
    const [, [groupUpdated]] = await Group.update(
      {
        imagePath: filename,
      },
      {
        where: { id: idGroup },
        returning: true,
      }
    );
    res.status(200).send({ data: groupUpdated });
  } catch (error) {
    next(error);
  }
};

module.exports.getUserGroups = async (req, res, next) => {
  try {
    const {
      params: { idUser },
    } = req;
    const userWithGroups = await User.findByPk(idUser, {
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: Group,
          through: {
            attributes: [],
          },
        },
      ],
    });
    if (!userWithGroups) {
      return next(createError(404, "User not found"));
    }
    res.status(200).send({ data: userWithGroups });
  } catch (error) {
    next(error);
  }
};

module.exports.addUserAtGroup = async (req, res, next) => {
  try {
    const {
      params: { idGroup },
      body: { userId },
    } = req;
    const group = await Group.findByPk(idGroup);
    if (!group) {
      return next(createError(404, "Group not found"));
    }
    const user = await User.findByPk(userId, {
      attributes: {
        exclude: ["password"],
      },
    });
    if (!user) {
      return next(createError(404, "User not found"));
    }
    await user.addGroup(group);
    res.status(200).send({ data: group });
  } catch (error) {
    next(error);
  }
};

module.exports.getUsersInGroup = async (req, res, next) => {
  try {
    const {
      params: { idGroup },
    } = req;
    const groupWithUsers = await Group.findByPk(idGroup, {
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password"],
          },
          through: {
            attributes: [],
          },
        },
      ],
    });
    if (!groupWithUsers) {
      return next(createError(404, "Group not found"));
    }
    res.status(200).send({ data: groupWithUsers });
  } catch (error) {
    next(error);
  }
};

module.exports.updateGroup = async (req, res, next) => {
  try {
    const {
      file: { filename },
      params: { idGroup },
      body,
    } = req;
    const groupData = {
      ...body,
      imagePath: filename,
    };
    const [, [groupUpdated]] = await Group.update(groupData, {
      where: { id: idGroup },
      returning: true,
    });
    res.status(200).send({ data: groupUpdated });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteGroup = async (req, res, next) => {
  try {
    const {
      params: { idGroup },
    } = req;
    const group = await Group.findOne({ where: { id: idGroup } });
    if (!group) {
      return next(createError(404, "Group not found"));
    }
    await Group.destroy({ where: { id: idGroup } });
    res.status(200).json(group);
  } catch (error) {
    next(error);
  }
};

module.exports.getGroupUsersCount = async (req, res, next) => {
  try {
    const {
      params: { idGroup },
    } = req;
    const group = await Group.findByPk(idGroup);
    if (!group) {
      return next(createError(404, "Group not found"));
    }
    const usersCount = await group.countUsers();
    res.status(200).send({ data: usersCount });
  } catch (error) {
    next(error);
  }
};
