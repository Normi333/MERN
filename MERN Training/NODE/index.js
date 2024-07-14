const express = require('express')
const { default: mongoose, mongo } = require('mongoose');
const connectDb = require('./config/db');
const taskcontroller = require('./controllers/task.controller');
const app = express()
const port = 3000

connectDb();

//using urlencoded
app.use(express.urlencoded());

app.set("view engine", "ejs");
app.get('/', taskcontroller.getTasks);
app.post("/add", taskcontroller.createTasks);
app.post("/delete/:id", taskcontroller.deleteTasks);
app.get("/edit/:id", taskcontroller.editTasks);
app.post("/edit/:id", taskcontroller.updateTasks);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});