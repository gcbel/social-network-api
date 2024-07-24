/* DEPENDENCIES */
const router = require("express").Router();
// const {} = require("../../controller/thoughtController");

/* ROUTES */
/* Get route, find all thoughts */
app.get("/thoughts", async (req, res) => {
  try {
    const thoughts = await thought.find({});
    res.status(200).json(thoughts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
});

/* Get route, find one thought */
app.get("/thoughts/:id", async (req, res) => {
  try {
    const thought = await thought.findOne({ _id: Object(req.params.id) });
    if (!thought) {
      res.status(400).json({ message: "No such thought" });
    } else {
      res.status(200).json(thought);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
});

/* Post route, create a thought */
app.post("/thoughts", async (req, res) => {
  try {
    const newThought = new Thought({ content: req.body.content });
    if (!newThought) {
      res.status(400).json({ message: "Issue creating new thought" });
    } else {
      res.status(200).json(newthought);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
});

/* EXPORTS */
module.exports = router;
