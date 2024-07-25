/* DEPENDENCIES */
const { Schema, model, Types } = require("mongoose");

/* SCHEMA */
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString(),
    },
  },
  {
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.id; // Remove `id` fields from output
        delete ret._id;
      },
    },
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString(),
    },
    reactions: [reactionSchema],
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

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

/* EXPORTS */
module.exports = Thought;
