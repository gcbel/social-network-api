const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
  reactions: { type: Schema.Types.ObjectId, ref: "reaction" },
  reactionCount: { type: Number, default: 0 },
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
