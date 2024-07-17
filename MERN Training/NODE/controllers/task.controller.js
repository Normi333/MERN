const Task = require("../models/Task");

const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.render("index", { tasks });
};

const createTasks = async (req, res) => {
    await Task.create({ title: req.body.title });
    res.redirect("/");
};

const deleteTasks = async (req, res) => {
    const taskId = req.params.id;
    await Task.deleteOne({ _id: taskId });
    res.redirect('/');
};

const editTasks = async (req, res) => {
    const taskId = req.params.id;
    const task = await Task.findOne({ _id: taskId });
    //eslai ni ejs ma rakhne
    res.send(`
        <h1>Update Task</h1>
        <form method="post" action="/edit/${taskId}">
        <label for="title">Update Task:</label>
        <input type="text" name="title" id="title" value="${task.title}"/>
        <input type="submit" id="submit" value="Update" />
        </form>
        `);
};

const updateTasks = async (req, res) => {
    // todos[req.params.index] = req.body.task;
    const taskId = req.params.id;
    await Task.updateOne({ _id: taskId }, { title: req.body.title });
    res.redirect("/");
};

module.exports = {
    getTasks,
    createTasks,
    deleteTasks,
    editTasks,
    updateTasks,
}