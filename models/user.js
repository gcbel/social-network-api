/* DEPENDENCIES */
const { Schema, model } = require("mongoose");

/* SCHEMA */
const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  friendCount: { type: Number, default: 0 },
  friends: [{ type: Schema.Types.ObjectId, ref: "user" }],
  thoughts: [{ type: Schema.Types.ObjectId, ref: "thought" }],
});

const user = model("user", userSchema);

/* EXPORTS */
module.exports = user;
