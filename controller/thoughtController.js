/* DEPENDENCIES */
const { User, Thought } = require("../models");

/* ROUTES */
/* Get route, find all thoughts */
async function getThoughts(req, res) {
  try {
    const thoughts = await Thought.find({});
    res.status(200).json(thoughts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting thoughts" });
  }
}

/* Get route, find one thought */
async function getOneThought(req, res) {
  try {
    const thought = await Thought.findOne({ _id: Object(req.params.id) });
    if (!thought) {
      res.status(400).json({ message: "No such thought" });
    } else {
      res.status(200).json(thought);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting thought by ID" });
  }
}

/* Post route, create a thought */
async function createThought(req, res) {
  try {
    const user = await User.findOne({ _id: Object(req.body.userId) });
    if (!user) {
      return res.status(404).json({ message: "No such user" });
    }
    const newThought = new Thought({
      thoughtText: req.body.thoughtText,
      username: req.body.username,
    });
    if (!newThought) {
      return res.status(400).json({ message: "Issue creating new thought" });
    }
    newThought.save();
    user.save();
    user.thoughts.push(newThought._id);
    res.status(200).json({ user: user, thought: newThought });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating thought" });
  }
}

/* Put route to /api/thoughts/:id, update a thought by ID */
async function updateThought(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    if (!thought) {
      return res.status(404).json({ message: "No such thought" });
    } else {
      await thought.save();
      res.status(200).json(thought);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating new user" });
  }
}

/* Delete route to /api/thoughts/:id, delete a thought by ID */
async function deleteThought(req, res) {
  try {
    // Delete thought
    const thought = await Thought.findOneAndDelete({ _id: req.params.id });
    if (!thought) {
      return res.status(404).json({ message: "No such thought" });
    }

    // Delete thought from user's thought list
    await User.updateOne(
      { thoughts: req.params.id },
      { $pull: { thoughts: req.params.id } }
    );

    res.status(200).json({
      message: "Thought has been deleted!",
    });
  } catch (err) {
    rconsole.error(err);
    res.status(500).json({ message: "Error deleting user" });
  }
}

/* EXPORT */
module.exports = {
  getThoughts,
  getOneThought,
  createThought,
  updateThought,
  deleteThought,
};
