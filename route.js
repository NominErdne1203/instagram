const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const router = express.Router();
const { loginUser, createUser } = require("./controller/user-controller");
const { createPost, getPosts } = require("./controller/post-controller");
const UserModel = require("./model/user-model");
dotenv.config();

const middleWare = (req, res, next) => {
  const { token } = req.headers;
  jwt.verify(token, "omen", (err, result) => {
    console.log(result?.role);
    if (result) next();
  });
};

router
  .get('/posts', getPosts)
  .post("/user", createUser)
  .post("/login", loginUser)
  .post("/createPost", middleWare, createPost);

module.exports = router;
