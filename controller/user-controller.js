const UserModel = require("../model/user-model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

dotenv.config();

exports.getUsers = async (req, res) => {
  const posts = await PostModel.find();
  res.status("200").json(posts);
};

exports.createUser = async (req, res) => {
  const hash = bcrypt.hashSync(req.body.pass, 3);

  if (!req.body.name) res.status(400).send("ner alga");
  const createUser = await UserModel.create({
    name: req.body.name,
    pass: hash,
  });

  res.status(201).json({ message: "new user created.", data: createUser });
};

exports.getUser = async (req, res) => {};

exports.deleteUser = async (req, res) => {};

exports.updateUser = async (req, res) => {};

exports.loginUser = async (req, res) => {
  const { name, pass } = req.body;
  const user = await UserModel.findOne({ name: name });
  if (!user) {
    res.status(400).json("user not found");
    return;
  }
  const result = bcrypt.compareSync(req.body.pass, user.pass);

  const token = jwt.sign({ name, pass, role: "user" }, "omen", {
    expiresIn: "1d",
  });

  res.status(200).json({ ...result, token });

  // if (pass === user?.pass) res.status(200).json(user);
  // else res.status(400).json("pass did not match");
};
