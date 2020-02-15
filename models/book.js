const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: {type: String},
  image: { type: image },

  // referenced https://medium.com/@alvenw/how-to-store-images-to-mongodb-with-node-js-fb3905c37e6d 
  link: {data: Buffer, contentType: String}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
