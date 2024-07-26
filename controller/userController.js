/* DEPENDENCIES */
const { User, Thought } = require("../models");

/* ROUTES */
/* Get route to /api/users, find all users */
async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting all users" });
  }
}

/* Get route to /api/users/:id, find user by ID */
async function getOneUser(req, res) {
  try {
    const user = await User.findOne({ _id: Object(req.params.id) })
      .populate("thoughts")
      .populate("friends");
    if (!user) {
      res.status(404).json({ message: "No such user" });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting user by ID" });
  }
}

/* Post route to /api/users, create a new user */
async function createUser(req, res) {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating new user" });
  }
}

/* Put route to /api/users/:id, update a user by ID */
async function updateUser(req, res) {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "No such user" });
    } else {
      await user.save();
      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating new user" });
  }
}

/* Delete route to /api/users/:id, delete a user by ID */
async function deleteUser(req, res) {
  try {
    // Get user and delete their thoughts
    const user = await User.findOne({ _id: Object(req.params.id) });
    if (!user) {
      return res.status(404).json({ message: "No such user" });
    }
    await Thought.deleteMany({ _id: { $in: user.thoughts } });

    // Delete user
    const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({
      message: "User and their thoughts have been deleted!",
    });
  } catch (err) {
    rconsole.error(err);
    res.status(500).json({ message: "Error deleting user" });
  }
}

/* EXPORT */
module.exports = { getUsers, getOneUser, createUser, updateUser, deleteUser };
