const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  friendCount: 0,
  friends: [],
  thoughts: [],
});

const user = mongoose.model("", userSchema);

const handleError = (err) => console.error(err);

// Will add data only if collection is empty to prevent duplicates
// More than one document can have the same name value
// todo.find({})
//   .exec()
//   .then((collection) => {
//     if (collection.length === 0) {
//       todo.insertMany([
//       ]).catch((err) => handleError(err));
//     }
//   });

module.exports = user;
