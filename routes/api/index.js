/* EXPORTS */
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");
const reactionRoutes = require("./reactionRoutes");

/* ROUTES */
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);
// router.use("/reactions", reactionRoutes);

/* EXPORTS */
module.exports = router;
