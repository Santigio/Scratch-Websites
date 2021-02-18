const express = require("express");

const app = express();


app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/index.html", (req, res) => res.redirect("/"));

app.get("/contact.html", (req, res) => res.sendFile(__dirname + "/icontact.html"));

app.get("/about.html", (req, res)=> res.sendFile(__dirname + "/about.html"));

app.get("/Experience.html", (req, res) => res.sendFile(__dirname + "/Experience.html"));

app.get("/services.html", (req, res) => res.sendFile(__dirname + "/services.html"));

app.listen(process.env.PORT || 3000, function(){
    console.log("ruining");
});
