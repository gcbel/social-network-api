const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
});

const todo = mongoose.model("", todoSchema);

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

module.exports = Genre;
