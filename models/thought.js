const { Schema, model } = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
  reactions: { type: Schema.Types.ObjectId, ref: "reaction" },
  reactionCount: { type: Number, default: 0 },
});

// const thought = mongoose.model("", userSchema);

module.exports = thought;
