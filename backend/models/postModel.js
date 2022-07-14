const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // This type will be an object ID
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true, // This will automatically create a created at and updated at field
  }
);

module.exports = mongoose.model("Post", postSchema);
