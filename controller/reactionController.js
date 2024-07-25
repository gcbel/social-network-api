/* DEPENDENCIES */
const { Thought } = require("../models");

/* ROUTES */
/* Post route to /api/thoughts/:id/reactions, add reaction */
async function createReaction(req, res) {
  try {
    const thought = await Thought.findOne({ _id: Object(req.params.id) });
    if (!thought) {
      res.status(404).json({ message: "No such thought" });
    } else {
      const reaction = {
        reactionBody: req.body.reactionBody,
        username: req.body.username,
      };
      thought.reactions.push(reaction);
      await thought.save();
      res.status(200).json(thought);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding friend", error: err });
  }
}

/* Post route to /api/thoughts/:thoughtId/reactions/:reactionId, delete a reaction */
async function deleteReaction(req, res) {
  try {
    const thought = await Thought.findOne({
      _id: Object(req.params.thoughtId),
    });

    if (!thought) {
      res.status(404).json({ message: "No such thought" });
    } else {
      if (thought.reactions.includes(reactionId)) {
        thought.reactions = thought.reactions.filter(
          (id) => !id.equals(reactionId)
        );
        await thought.save();
      }
      res.status(200).json(thought);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error removing reaction", error: err });
  }
}

/* EXPORT */
module.exports = { createReaction, deleteReaction };
