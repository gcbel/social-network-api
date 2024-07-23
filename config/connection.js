/* DEPENDENCIES */
const mongoose = require("mongoose");

/* Connect mongoose to local connection */
mongoose.connect("mongodb://127.0.0.1:27017/departmentsDB");

/* EXPORTS */
module.exports = mongoose.connection;
