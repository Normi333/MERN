const express = require("express");
const taskcontroller = require("../controllers/task.controller");
const router = express.Router();

router.get('/', taskcontroller.getTasks);
router.post("/add", taskcontroller.createTasks);
router.post("/delete/:id", taskcontroller.deleteTasks);
router.get("/edit/:id", taskcontroller.editTasks);
router.post("/edit/:id", taskcontroller.updateTasks);

module.exports = router;