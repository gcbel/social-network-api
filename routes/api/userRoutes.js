/* DEPENDENCIES */
const router = require("express").Router();
const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controller/userController");

/* ROUTES */
/* Get route to /api/users, find all users */
router.route("/").get(getUsers).post(createUser);

/* Get route to /api/users/:id, find user by ID */
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);

/* EXPORTS */
module.exports = router;
