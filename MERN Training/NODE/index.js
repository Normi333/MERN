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

app.get('/', (req, res) => {
    Task.find().then((tasks) => {
    let textToDisplay = "";

    tasks.forEach((task) => {
      textToDisplay += `
    <li>
      ${task.title}
      <form method="post" action="/delete/${task._id}">
      <button type = "submit">delete</button>
      </form>
      <a href="/edit/${task._id}">edit</a>
    </li>`;
    });

    res.send(`
      <form method="post" action="/add">
        <input type="text" name="title" id="title" placeholder="your new task" />
        <input type="submit" id="submit" value="Add" />
      </form>
      <ul>${textToDisplay}</ul>`
    );
  })
});

app.get("/:index", (req, res) => {
  const index = req.params.index;
  res.send(todos[index]);
});

app.post("/add", (req, res) => {
  Task.create({ title: req.body.title })
    .then(() => {
      res.redirect("/")
    })
    .catch((err) => console.log(err));
});

app.post("/delete/:index", (req, res) => {
  const index = req.params.index;
  todos.splice(index, 1);
  res.redirect("/");
})

app.get("/edit/:index", (req, res) => {
  const index = req.params.index;
  res.send(`
    <form method="post" action="/edit/${index}">
    <input type="text" name="task" id="task" value="${todos[index]}"/>
    <input type="submit" id="submit" value="Update" />
    </form>
    `)
})

app.post("/edit/:index", (req, res) => {
  todos[req.params.index] = req.body.task;
  res.redirect("/");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});