/* DEPENDENCIES */
const router = require("express").Router();
const {
  getThoughts,
  getOneThought,
  createThought,
} = require("../../controller/thoughtController");
const {
  createReaction,
  deleteReaction,
} = require("../../controller/reactionController");

/* ROUTES */
/* Routes to /api/thoughts, find all thoughts and create a thought */
router.route("/").get(getThoughts).post(createThought);

/* Route to /api/thoughts/:id, find one thought */
router.route("/:id").get(getOneThought);

/* Route to /api/thoughts/:thoughtId/reactions, create a reaction */
router.route(":id/reactions").post(createReaction);

/* Route to /api/thoughts/:thoughtId/reactions/:reactionId, delete a reaction */
router.route(":thoughtId/reactions/:reactionId").delete(deleteReaction);

/* EXPORTS */
module.exports = router;
