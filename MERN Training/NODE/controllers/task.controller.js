const Task = require("../models/Task");

const getTasks = async (req, res) => {
    if (!req.session.user) return res.redirect("/auth/sign-in");
    const tasks = await Task.find({ user: req.session.user._id });
    res.render("index", { tasks });
};

const createTasks = async (req, res) => {
    if (!req.session.user) return res.redirect("/auth/sign-in");
    await Task.create({ title: req.body.title, user: req.session.user._id });
    res.redirect("/");
};

const deleteTasks = async (req, res) => {
    if (!req.session.user) return res.redirect("/auth/sign-in");
    const taskId = req.params.id;
    await Task.deleteOne({ _id: taskId, user: req.session.user._id });
    res.redirect('/');
};

const editTasks = async (req, res) => {
    if (!req.session.user) return res.redirect("/auth/sign-in");
    const taskId = req.params.id;
    const task = await Task.findOne({ _id: taskId, user: req.session.user._id });
    //eslai ni ejs ma rakhne
    res.render("edit", { task });
};

const updateTasks = async (req, res) => {
    if (!req.session.user) return res.redirect("/auth/sign-in");
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