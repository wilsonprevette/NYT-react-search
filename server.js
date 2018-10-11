const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const app = express();
const mongoose = require("mongoose");
const db = require('./models');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// routes
let router = new express.Router();

router.post("/api/saved", (req, res) => {
  let article = req.body
  console.log(article)
  db.Article.create(article)
  .then(() => {
    res.json(article)
  })
  .catch((err) => {

  })
})


app.use(router);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});