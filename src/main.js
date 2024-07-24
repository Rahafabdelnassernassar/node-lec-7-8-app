//package
const express = require("express");

const app = express();

//port
const port = process.env.port || 3000;

// pages and content

//static pages from another project
const path = require("path");

const x = path.join(__dirname, "../public");

app.use(express.static(x));

//pages by get

// app.get("/", (req, res) => {
//   res.send("Hello from home page !!!!!!");
// });

app.get("/data", (req, res) => {
  res.send("Hello from data page !!!!!!");
});

// app.get("/about", (req, res) => {
//   res.send("Hello from about page !!!!!!");
// });

app.get("/info", (req, res) => {
  res.send("Hello from info page !!!!!!");
});

// Dynamic html ( hbs)
app.set("view engine", "hbs");

// header(to read partials)
const hbs = require("hbs");
const partialsPath = path.join(__dirname, "../partials");
hbs.registerPartials(partialsPath);

//pages
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "Welcome to Home Page",
    img1: "pictures/5.jpg",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    message: "Welcome to About Page",
    img2: "pictures/1.jpeg",
  });
});

app.get("/service", (req, res) => {
  res.render("service", {
    title: "Customer services Page",
    message: "Welcome to Customer services Page",
    img3: "pictures/2.jpeg",
  });
});

app.get("/team", (req, res) => {
  res.render("team", {
    title: "Team Page",
    message: "Welcome to team Page",
    name: "Rahaf",
    age: 20,
  });
});

app.get("/content", (req, res) => {
  res.render("content", {
    title: "Content Page",
    message: "Welcome to content Page",
    img4: "pictures/3.jpeg",
  });
});

//listen
app.listen(port, () => console.log("Server running on port " + port));
