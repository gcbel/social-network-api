/* DEPENDENCIES */
const router = require("express").Router();
const apiRoutes = require("./api");

/* ROUTES */
router.use("/api", apiRoutes);

/* EXPORTS */
module.exports = router;
