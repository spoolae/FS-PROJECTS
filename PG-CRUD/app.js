const express = require("express");
const ThingController = require("./controllers/thing.controller");

const app = express();

app.use(express.json());

app
  .route("/things")
  .post(ThingController.createThing)
  .get(ThingController.findAllThing);

app
  .route("/things/:idThing")
  .put(ThingController.updateThing)
  .delete(ThingController.deleteThing);

// .get(ThingController.findThing)

module.exports = app;
