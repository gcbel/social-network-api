/* DEPENDENCIES */
const router = require("express").Router();
const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controller/userController");
const {
  addFriend,
  deleteFriend,
} = require("../../controller/friendController");

/* ROUTES */
/* Routes to /api/users, find all users and create new user */
router.route("/").get(getUsers).post(createUser);

/* Routes to /api/users/:id, find, update, and delete user by ID */
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);

/* Routes to /api/users/:userId/friends/:friendId, add a friend to a user's list, remove a friend from a user's list */
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

/* EXPORTS */
module.exports = router;
