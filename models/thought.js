const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
  reactions: [],
  reactionCount: 0,
});

const thought = mongoose.model("", userSchema);

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

module.exports = thought;
