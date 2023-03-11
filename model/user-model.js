const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    require:[true, "name is required"],
  },
  pass: {
    type: String,
    require:[true, "name is required"],
  },
  role: String
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
