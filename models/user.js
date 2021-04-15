const mongoose = require("mongoose");
const ProfileSchema = require("./profile").ProfileSchema;
const ParamSchema = require("./param").ParamSchema;
const MatchSchema = require("./match").MatchSchema;
const ProgSchema = require("./prog").ProgSchema;
const QuestionSchema = require("./question").QuestionSchema;

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
    },
    _id: {
      type: String,
      trim: true,
      unique: true,
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "profile",
    },
    prog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "prog",
    },
    match: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "match",
    },
    prama: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "param",
    },
  },

  { strict: false }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
