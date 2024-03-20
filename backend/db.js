const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/paytm-clone")
  .then(() => console.log("Connected!"));
const userSChema = mongoose.Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
});
const User=mongoose.model("user",userSChema)
module.exports={User}

