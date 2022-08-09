"use strict";

const express = require("express");

require("dotenv").config();

const cors = require("cors");

const mongoose = require("mongoose");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

// routs
app.get("/", handleHome);

// handeler function
function handleHome(req, res) {
  res.send("hello world");
}

// data base code
mongoose.connect("mongodb://localhost:27017/firstlink");

const bookschema = new mongoose.Schema({
  name: String,
  auther: String,
  releasedDate: Number,
});

const bookModal = mongoose.model("bookModal", bookschema);

const book1 = new bookModal({
  name: "THE SUN ALSO RISES ",
  auther: "ERNEST HEMINGWAY",
  releasedDate: 2019,
});
const book2 = new bookModal({
  name: "NUMBER THE STARS",
  auther: "LOIS LOWRY",
  releasedDate: 2017,
});
const book3 = new bookModal({
  name: "NOLI ME TANGERE",
  auther: "JOSÉ RIZAL",
  releasedDate: 2021,
});
book1.save();
book2.save();
book3.save();

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
