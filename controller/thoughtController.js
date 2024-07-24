/* DEPENDENCIES */
const { User, Thought, Reaction } = require("../models");

/* ROUTES */
/* Get route, find all thoughts */
async function getThoughts(req, res) {
  try {
    const thoughts = await Thought.find({});
    res.status(200).json(thoughts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
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
    res.status(500).json({ message: "Error" });
  }
}

/* Post route, create a thought */
async function createThought(req, res) {
  try {
    const newThought = await Thought.create(req.body);
    if (!newThought) {
      res.status(400).json({ message: "Issue creating new thought" });
    } else {
      res.status(200).json(newThought);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
}

/* EXPORT */
module.exports = { getThoughts, getOneThought, createThought };
