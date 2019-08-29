const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;
const home = require("./routes/home");
const about = require("./routes/about/get/index");
const contact = require("./routes/contact/get/index");

app.use(express.static("public"));
app.engine(".hbs", exphbs({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", ".hbs");

app.use("/", home);
app.use("/about", about);
app.use("/contact", contact);

app.get("/", (req, res, next) => {
  res.send("smoke test");
  next();
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
