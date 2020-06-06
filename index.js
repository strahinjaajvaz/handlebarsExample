const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home", Array(5).fill({ a: 12 }));
});

app.listen(3001, function () {
  console.log("Listening on 3001");
});
