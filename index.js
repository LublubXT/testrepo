const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


app.get("/", function (req, res) {
    res.render("list", { newListItems: items });
})

app.post("/", function (req, res) {
    var item = req.body.newItem;

    items.push(item);

    res.redirect("/");
})

app.listen(3000, function () {
    console.log("server started on port 3000");
})