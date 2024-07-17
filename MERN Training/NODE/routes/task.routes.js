const express = require("express");
const protect = require("../middleware/protect.middleware");
const taskcontroller = require("../controllers/task.controller");
const router = express.Router();

router.get('/',protect, taskcontroller.getTasks);
router.post("/add",protect, taskcontroller.createTasks);
router.post("/delete/:id",protect, taskcontroller.deleteTasks);
router.get("/edit/:id",protect, taskcontroller.editTasks);
router.post("/edit/:id",protect, taskcontroller.updateTasks);

module.exports = router;