/* DEPENDENCIES */
const router = require("express").Router();
// const {} = require("../../controller/userController");

/* ROUTES */
/* Get route to /api/users, find all users */
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
});

/* Get route to /api/users/:id, find user by ID */
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: Object(req.params.id) });
    if (!user) {
      res.status(400).json({ message: "No such user" });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
});

/* Post route to /api/users, create a new user */
router.post("/users", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
    });
    newUser.save();
    if (!newuser) {
      res.status(400).json({ message: "Issue creating new user" });
    } else {
      res.status(200).json(newUser);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
});

/* EXPORTS */
module.exports = router;
