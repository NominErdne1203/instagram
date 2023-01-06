const express = require("express");
const router = express.Router();
const { loginUser, createUser } = require("./controller/user-controller");

router.post("/", createUser).post("/login", loginUser);

module.exports = router;
