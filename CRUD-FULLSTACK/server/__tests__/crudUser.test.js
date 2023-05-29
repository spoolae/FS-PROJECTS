const request = require("supertest");
const yup = require("yup");
const app = require("../app");
const db = require("../models");

const appRequest = request(app);

const userResponseSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  birthday: yup.date().required(),
  isMale: yup.boolean().required(),
});

const postResponseSchema = yup.object({
  data: userResponseSchema,
});

const getUserData = () => ({
  firstName: "Brad",
  lastName: "Pitt",
  email: `pitt${Date.now()}@gmail.com`,
  password: "pitt123",
  birthday: "1963-12-18",
  isMale: true,
});

const user = getUserData();

afterAll(() => {
  return db.sequelize.close();
});

describe("sign up test", () => {
  let createdUser;

  afterAll(async () => {
    if (createdUser) {
      await createdUser.destroy();
    }
  });

  test("user registered successfully", async () => {
    const response = await appRequest.post("/api/users").send(user);
    expect(response.statusCode).toBe(201);
    expect(response.body.data.hasOwnProperty("password")).toBe(false);
    expect(postResponseSchema.isValidSync(response.body)).toBe(true);

    createdUser = await db.User.findOne({ where: { email: user.email } });
  });

  test("user registered with repeat email", async () => {
    const response = await appRequest.post("/api/users").send(user);
    expect(response.statusCode).toBe(409);
  });

  test("user registered with empty fields", async () => {
    const response = await appRequest.post("/api/users").send({});
    expect(response.statusCode).toBe(400);
  });
});

describe("get user test", () => {
  let newUser;

  beforeAll(async () => {
    newUser = await db.User.create(getUserData());
  });

  afterAll(async () => {
    await newUser.destroy();
  });

  test("get all users successfully", async () => {
    const response = await appRequest.get("/api/users");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
    expect(userResponseSchema.isValidSync(response.body.data[0])).toBe(true);
  });

  test("get one user successfully", async () => {
    const response = await appRequest.get(`/api/users/${newUser.id}`);
    expect(response.statusCode).toBe(200);
    expect(userResponseSchema.isValidSync(response.body.data)).toBe(true);
  });

  test("get one user that doesn't exist", async () => {
    const response = await appRequest.get("/api/users/-1");
    expect(response.statusCode).toBe(404);
  });
});
