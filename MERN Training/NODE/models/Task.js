const mongoose = require("mongoose");

//creating schema of table
const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
});

//creating table
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
