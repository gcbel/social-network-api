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
// async function deleteReaction(req, res) {
//   try {
//     const thought = await User.findOne({ _id: Object(req.params.thoughtId) });

//     if (!user || !friend) {
//       res.status(404).json({ message: "No such user" });
//     } else {
//       if (user.friends.includes(friendId)) {
//         user.friends = user.friends.filter((id) => !id.equals(friendId));
//         await user.save();
//       }
//       res.status(200).json(user);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error removing friend", error: err });
//   }
// }

/* EXPORT */
module.exports = { createReaction, deleteReaction };
