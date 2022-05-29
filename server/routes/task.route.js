const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Task Route");
});

module.exports = router;
