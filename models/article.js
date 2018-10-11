const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  synopsis: String
});

const Article = mongoose.model("Article", artSchema);

module.exports = Article;