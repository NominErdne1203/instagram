const mongoose = require("mongoose");
const dotenv = require("dotenv")
const express = require("express");
const bodyParser = require("body-parser");
const port = 8000;
const app = express();
const route = require("./route");
var cors = require("cors");

dotenv.config();

const uri =
  "mongodb+srv://NominErdene:99305757@cluster0.rz1blnn.mongodb.net/database?retryWrites=true&w=majority";

app.use(cors());
app.use(bodyParser.json());
app.use(route);

const connect = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_DB_URI || '');

    console.log('Database connected');
} catch (err) {
    console.log(err);
}
};
connect();

app.listen(port, () => {
  console.log(`express app listening on http://localhost:${port}`);
});
