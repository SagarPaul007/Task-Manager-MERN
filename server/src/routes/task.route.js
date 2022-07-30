const router = require("express").Router();
const taskController = require("../controllers/task");
const { validateTaskInput } = require("../middlewares/validate");

router.post("/add", validateTaskInput, taskController.createTask);
router.post("/edit", taskController.updateTask);
router.post("/delete", taskController.deleteTask);

module.exports = router;
