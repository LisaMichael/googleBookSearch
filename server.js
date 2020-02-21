const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
 app.use(routes);


// Connect to the Mongo DB
//https://stackoverflow.com/questions/50448272/ avoid-current-url-string-parser-is-deprecated-warning-by-setting-usenewurlpars
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});