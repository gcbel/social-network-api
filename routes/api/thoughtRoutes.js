/* DEPENDENCIES */
const router = require("express").Router();
const {
  getThoughts,
  getOneThought,
  createThought,
} = require("../../controller/thoughtController");

/* ROUTES */
/* Get and post routes to /api/thoughts, find all thoughts and create a thought */
router.route("/").get(getThoughts).post(createThought);

/* Get route to /api/thoughts/:id, find one thought */
router.route("/:id").get(getOneThought);

/* EXPORTS */
module.exports = router;
