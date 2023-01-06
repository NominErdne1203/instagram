const UserModel = require("../model/user-model");

exports.getUsers = async (req, res) => {
  const posts = await PostModel.find();
  res.status("200").json(posts);
};

exports.createUser = async (req, res) => {
  if (!req.body.name) res.status(400).send("ner alga");
  const createUser = await UserModel.create({
    name: req.body.name,
    pass: req.body.pass,
  });
  res.status(201).json({ message: "new user created.", data: createUser });
};

exports.getUser = async (req, res) => {};

exports.deleteUser = async (req, res) => {};

exports.updateUser = async (req, res) => {};

exports.loginUser = async (req, res) => {
  const { name, pass } = req.body;

  const user = await UserModel.findOne({ name: name, pass: pass });
  console.log(user);

  if (pass === user.pass) res.status(200).json(user);
  else res.status(400).json("pass did not match");
};
