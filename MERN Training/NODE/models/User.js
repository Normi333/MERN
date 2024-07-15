const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    username: String,
    email: {
        unique: true,
        type: String,
    },
    Name: String,
    password: String,
});

const User = mongoose.model("User", taskSchema);
module.exports = User;
