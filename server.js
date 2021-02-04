const express = require("express");
const compression = require("compression");
const logger = require("morgan");
const mongoose = require("mongoose");
if (process.env.NODE_ENV) {
  require("dotenv").config({
    path: `${__dirname}/.env.${process.env.NODE_ENV}`,
  });
} else {
  require("dotenv").config();
}

const PORT = process.env.PORT || 8080;
const host = process.env.HOST;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

module.exports = app;
