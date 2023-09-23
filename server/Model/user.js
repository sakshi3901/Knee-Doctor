const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
  },
  { timeStamps: true }
);

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
