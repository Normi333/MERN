const express = require('express')
const bcrypt = require('bcryptjs');
const { default: mongoose, mongo } = require('mongoose');
const connectDb = require('./config/db');
const taskcontroller = require('./controllers/task.controller');
const authcontroller = require('./controllers/auth.controller');
const User = require('./models/User');
const app = express()
const port = 3000

connectDb();

//using urlencoded to connect using express
app.use(express.urlencoded());


//task routes
app.set("view engine", "ejs");
app.get('/', taskcontroller.getTasks);
app.post("/add", taskcontroller.createTasks);
app.post("/delete/:id", taskcontroller.deleteTasks);
app.get("/edit/:id", taskcontroller.editTasks);
app.post("/edit/:id", taskcontroller.updateTasks);

//auth routes
app.get("/auth/sign-in", authcontroller.signInPage);
app.get("/auth/sign-up", authcontroller.signUpPage);
app.post("/auth/sign-up", authcontroller.signUp)
app.post("/auth/sign-in", authcontroller.signIn);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

