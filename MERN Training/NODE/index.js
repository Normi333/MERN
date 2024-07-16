const express = require('express')
const bcrypt = require('bcryptjs');
const { default: mongoose, mongo } = require('mongoose');
const connectDb = require('./config/db');
const taskcontroller = require('./controllers/task.controller');
const User = require('./models/User');
const app = express()
const port = 3000

connectDb();

//using urlencoded to connect using express
app.use(express.urlencoded());

app.set("view engine", "ejs");
app.get('/', taskcontroller.getTasks);
app.post("/add", taskcontroller.createTasks);
app.post("/delete/:id", taskcontroller.deleteTasks);
app.get("/edit/:id", taskcontroller.editTasks);
app.post("/edit/:id", taskcontroller.updateTasks);

app.get("/auth/sign-in", (req, res) => {
  res.render("sign-in", { message: null });
});

app.get("/auth/sign-up", (req, res) => {
  res.render("sign-up");
});

app.post("/auth/sign-up", async (req, res) => {
  const { password, ...rest } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  await User.create({ password: hashedPassword, ...rest });
  res.redirect("/");
})

app.post("/auth/sign-in", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.render("sign-in", { message: "Invalid Credentials" });
    return;
  }
  const userHashedPassword = user.password;
  const passwordIsCorrect = bcrypt.compareSync(
    req.body.password,
    userHashedPassword
  );
  if (passwordIsCorrect) res.redirect("/");
  else res.render("sign-in", { message: "Invalid Credentials" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

