const express = require('express')
const bcrypt = require('bcryptjs');
const { default: mongoose, mongo } = require('mongoose');
const connectDb = require('./config/db');
const taskcontroller = require('./controllers/task.controller');
const authcontroller = require('./controllers/auth.controller');
const authRoutes = require('./routes/auth.routes');
const taskRoutes = require('./routes/task.routes');
const User = require('./models/User');
const app = express()
const port = 3000

connectDb();

//using urlencoded to connect using express
app.set("view engine", "ejs");
app.use(express.urlencoded());

//task routes
app.use("/", taskRoutes);

//auth routes
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

