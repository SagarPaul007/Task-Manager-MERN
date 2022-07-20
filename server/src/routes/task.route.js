const router = require("express").Router();
const taskController = require("../controllers/task");
const { validateTaskInput } = require("../middlewares/validate");

router.post("/createTask", validateTaskInput, taskController.createTask);
router.post("/updateTask", taskController.updateTask);
router.post("/deleteTask", taskController.deleteTask);

module.exports = router;
