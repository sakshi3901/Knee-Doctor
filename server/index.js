const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./Model/user.js");

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.json("test ok");
});

mongoose.connect(process.env.MONGO_URL);

app.post("/enquiry", async (req, res) => {
  const { name, email, phone, desc } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      phone,
      desc,
    });
    res.json(userDoc);
  } catch (error) {
    res.status(422).json(error);
  }
});

app.listen(4000);
