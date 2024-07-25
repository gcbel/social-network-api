/* DEPENDENCIES */
const { Schema, model } = require("mongoose");

/* SCHEMA */
const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.id; // Remove `id` field from output
      },
    },
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", userSchema);

/* EXPORTS */
module.exports = User;
