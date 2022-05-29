const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");

const registerUser = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.json({ success: false, message: "Email already exists" });
    }
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.json({ success: false, message: "Username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      username,
      password: hashedPassword,
      tasks: [],
    });
    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.json({ success: true, message: "User registered", token });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Incorrect password" });
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.json({ success: true, message: "User logged in", token });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
