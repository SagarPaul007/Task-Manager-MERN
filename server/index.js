const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { DB_URI } = require("./src/config/env");
const adminRoute = require("./src/routes/admin.route");
const taskRoutes = require("./src/routes/task.route");
const userRoutes = require("./src/routes/user.route");
const { validateUser } = require("./src/middlewares/user");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(validateUser);

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
