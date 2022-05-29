const User = require("../models/user.model");
const Task = require("../models/task.model");

const createTask = async (req, res) => {
  try {
    const { id } = req.user;
    if (!id) res.json({ success: false, message: "User not found" });
    const user = await User.findById(id);
    if (!user) res.json({ success: false, message: "User not found" });
    const { title, description, priority, dueDate } = req.body;
    const task = await Task.create({
      title,
      description,
      priority,
      dueDate,
      user: user._id,
    });
    user.tasks.push(task._id);
    await user.save();
    res.json({ success: true, message: "Task created successfully" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.user;
    if (!id) res.json({ success: false, message: "User not found" });
    const user = await User.findById(id);
    if (!user) res.json({ success: false, message: "User not found" });
    const { taskId, ...data } = req.body;
    const task = await Task.findById(taskId);
    if (!task) res.json({ success: false, message: "Task not found" });
    if (task.user.toString() !== user._id.toString()) {
      res.json({
        success: false,
        message: "You are not authorized to perform this action",
      });
    }
    await Task.findByIdAndUpdate(taskId, data);
    res.json({ success: true, message: "Task updated successfully" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.user;
    if (!id) res.json({ success: false, message: "User not found" });
    const user = await User.findById(id);
    if (!user) res.json({ success: false, message: "User not found" });
    const { taskId } = req.body;
    const task = await Task.findById(taskId);
    if (!task) res.json({ success: false, message: "Task not found" });
    if (task.user.toString() !== user._id.toString()) {
      res.json({
        success: false,
        message: "You are not authorized to perform this action",
      });
    }
    await Task.findByIdAndDelete(taskId);
    user.tasks.pull(taskId);
    await user.save();
    res.json({ success: true, message: "Task deleted successfully" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
};
