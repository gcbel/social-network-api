/* DEPENDENCIES */
const { User } = require("../models");

/* ROUTES */
/* Post route to /api/users/:userId/friends/:friendId, add friend */
async function addFriend(req, res) {
  try {
    const user = await User.findOne({ _id: Object(req.params.userId) });
    const friend = await User.findOne({ _id: Object(req.params.friendId) });
    if (!user || !friend) {
      res.status(404).json({ message: "No such user" });
    } else {
      if (!user.friends.includes(req.params.friendId)) {
        user.friends.push({ _id: Object(req.params.friendId) });
        await user.save();
      }
      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding friend" });
  }
}

/* Delete route to /api/users/:userId/friends/:friendId, removes friend */
async function deleteFriend(req, res) {
  try {
    const user = await User.findOne({ _id: Object(req.params.userId) });
    const friend = await User.findOne({ _id: Object(req.params.friendId) });
    if (!user || !friend) {
      res.status(404).json({ message: "No such user" });
    } else {
      if (user.friends.includes(req.params.friendId)) {
        user.friends = user.friends.filter(
          (id) => !id.equals(req.params.friendId)
        );
        await user.save();
      }
      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error removing friend" });
  }
}

/* EXPORT */
module.exports = { addFriend, deleteFriend };
