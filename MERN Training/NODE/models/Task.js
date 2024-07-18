const mongoose = require("mongoose");
const { Schema } = require("mongoose");
//creating schema of table
const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
});

//creating table
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
