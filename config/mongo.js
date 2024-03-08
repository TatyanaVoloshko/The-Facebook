const mongoose = require("mongoose");
require("dotenv").config();

const { DB_URI } = process.env;

mongoose
  .connect(DB_URI)
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log(err));
