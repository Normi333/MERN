const express = require("express");
const authcontroller = require("../controllers/auth.controller");
const router = express.Router();

router.get("/sign-in", authcontroller.signInPage);
router.get("/sign-up", authcontroller.signUpPage);
router.post("/sign-up", authcontroller.signUp);
router.post("/sign-in", authcontroller.signIn);
router.post("/logout", authcontroller.logOut);

module.exports = router;
