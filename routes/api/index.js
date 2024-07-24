/* EXPORTS */
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

/* ROUTES */
router.use("/users", userRoutes);
router.use("/thought", thoughtRoutes);

/* EXPORTS */
module.exports = router;