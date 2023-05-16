//initializing package
const { Schema, model } = require("mongoose");
const { thoughtSchema } = require("./Thought");

//creating the schema (this is just an object in many ways)
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [`[a-z0-9]+@[a-z]+\.[a-z]{2,3}`, "Has to be an email."],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        // this has to match the ref of the thought model, including caps "Thought"
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//virtuals or settings for the model
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

//making the model using the schema (this creates the document, or 'table' in your db)
const User = model("user", userSchema);

// exporting this out for when you need to use it
module.exports = User;
