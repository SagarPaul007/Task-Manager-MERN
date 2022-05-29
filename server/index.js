const express = require("express");
const mongoose = require("mongoose");
const { DB_URI } = require("./config/env");
const adminRoute = require("./routes/admin.route");
const taskRoutes = require("./routes/task.route");
const userRoutes = require("./routes/user.route");

const app = express();

// middlewares
app.use(express.json());

// routes
app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);
app.use("/", adminRoute);

// connect to mongodb
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// listen to port
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
