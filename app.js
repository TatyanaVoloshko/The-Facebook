const express = require("express");
const app = express();
require("./config/mongo");
const routes = require("./config/routes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.redirect("/feed");
});


app.use(routes)
let port = 3000;
app.listen(port, console.log(`app is on http://localhost:${port}`));