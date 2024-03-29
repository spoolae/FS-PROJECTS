const createError = require("http-errors");
const _ = require("lodash");
const { Op } = require("sequelize");
const { User } = require("../models");

const pickBody = (body) =>
  _.pick(body, [
    "firstName",
    "lastName",
    "email",
    "password",
    "birthday",
    "isMale",
  ]);

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const values = pickBody(body);
    const newUser = await User.create(values);
    if (!newUser) {
      return next(createError(400, "Bad request!"));
    }
    const user = newUser.get();
    delete user.password;
    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const { pagination = {} } = req;
    const users = await User.findAll({
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      ...pagination,
      order: [["id", "ASC"]],
    });
    if (users.length === 0) {
      return next(createError(404, "Users not found!"));
    }
    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.getUserByPk = async (req, res, next) => {
  try {
    const { userInstance } = req;
    const countUsersTasks = await userInstance.countTasks();
    userInstance.dataValues.countTasks = countUsersTasks;
    res.status(200).send({ data: userInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const { body, userInstance } = req;
    const values = pickBody(body);
    const updatedUser = await userInstance.update(values, {
      returning: true,
    });
    const user = updatedUser.get();
    delete user.password;
    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const { userInstance } = req;
    await userInstance.destroy();
    res.status(200).send({ data: userInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.getUsersCount = async (req, res, next) => {
  try {
    const count = await User.count();
    res.status(200).send({ count });
  } catch (error) {
    next(error);
  }
};
