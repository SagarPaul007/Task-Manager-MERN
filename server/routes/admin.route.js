const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Admin Route");
});

module.exports = router;