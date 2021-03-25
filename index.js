const express = require("express");
const apiRoute = require("./routes/api");
const path = require("path");
const methodOverride = require("method-override");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(methodOverride("_method"));

app.use("/api", apiRoute);

app.listen(3000, () => {
  console.log("Server listening in port 3000");
});
