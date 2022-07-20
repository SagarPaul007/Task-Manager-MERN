const router = require("express").Router();
const {
  validateRegisterInput,
  validateLoginInput,
} = require("../middlewares/validate");
const userController = require("../controllers/user.js");

router.post("/register", validateRegisterInput, userController.registerUser);
router.get("/login", validateLoginInput, userController.loginUser);
router.get("/getUser", userController.getUser);

module.exports = router;
