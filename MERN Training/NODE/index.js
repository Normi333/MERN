const express = require('express')
const { default: mongoose, mongo } = require('mongoose')
const app = express()
const port = 3000

//connection with mongodb 
mongoose.connect('mongodb://localhost:27017/task-management').then(() => {
  console.log('Database Connected.');
})

//creating schema of table
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
});

//creating table
const Task = mongoose.model("Task", taskSchema);

//using urlencoded
app.use(express.urlencoded());
const todos = ["learn html", "learn css", "learn php"];

app.set("view engine", "ejs");

app.get('/', async (req, res) => {
  const tasks = await Task.find()
  res.render("index", { tasks });
});

app.get("/:index", (req, res) => {
  const index = req.params.index;
  res.send(todos[index]);
});

app.post("/add", async (req, res) => {
  await Task.create({ title: req.body.title })
  res.redirect("/")
});

app.post("/delete/:id", async (req, res) => {
  // const index = req.params.index;
  // todos.splice(index, 1);
  // res.redirect("/");
  const taskId = req.params.id;
  await Task.deleteOne({ _id: taskId })
  res.redirect('/');
});

app.get("/edit/:id", async (req, res) => {
  const taskId = req.params.id;
  const task = await Task.findOne({ _id: taskId })
  res.send(`
      <form method="post" action="/edit/${taskId}">
      <input type="text" name="title" id="title" value="${task.title}"/>
      <input type="submit" id="submit" value="Update" />
      </form>
      `)
});

app.post("/edit/:id", async (req, res) => {
  // todos[req.params.index] = req.body.task;
  const taskId = req.params.id;
  await Task.updateOne({ _id: taskId }, { title: req.body.title })
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});