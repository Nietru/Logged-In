//initializing package
const { Schema, model } = require("mongoose");

//creating the schema (this is just an object in many ways)
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
      ref: "User",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//making the model using the schema (this creates the document, or 'table' in your db)
const Thought = model("thought", thoughtSchema);

// exporting this out for when you need to use it
module.exports = Thought;
