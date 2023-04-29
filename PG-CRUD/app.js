const express = require("express");
const ThingController = require("./controllers/thing.controller");

const app = express();

app.use(express.json());

app
  .route("/things")
  .post(ThingController.createThing)
  .get(ThingController.findAllThing);

app.route("/things/:idThing").put(ThingController.updateThing);
// .get(ThingController.findThing)
// .delete(ThingController.deleteThing)

module.exports = app;
