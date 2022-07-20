const router = require("express").Router();
const User = require("../models/user.model");

router.get("/getUserCount", (req, res) => {
  User.countDocuments({}, (err, count) => {
    if (err) {
      return res.json({ success: false, message: err.message });
    }
    return res.json({ success: true, count });
  });
});

module.exports = router;
