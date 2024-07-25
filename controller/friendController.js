/* DEPENDENCIES */
const { User } = require("../models");

/* ROUTES */
/* Put route to /api/users/:userId/friends/:friendId, add friend */
async function addFriend(req, res) {
  try {
    const user = await User.findOne({ _id: Object(req.params.userId) });
    const friend = await User.findOne({ _id: Object(req.params.friendId) });
    if (!user || !friend) {
      res.status(404).json({ message: "No such user" });
    } else {
      if (!user.friends.includes(friendId)) {
        user.friends.push({ _id: Object(req.params.friendId) });
        await user.save();
      }
      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding friend", error: err });
  }
}

async function deleteFriend(req, res) {
  try {
    const user = await User.findOne({ _id: Object(req.params.userId) });
    const friend = await User.findOne({ _id: Object(req.params.friendId) });
    if (!user || !friend) {
      res.status(404).json({ message: "No such user" });
    } else {
      if (user.friends.includes(friendId)) {
        user.friends = user.friends.filter((id) => !id.equals(friendId));
        await user.save();
      }
      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error removing friend", error: err });
  }
}

/* EXPORT */
module.exports = { addFriend, deleteFriend };
