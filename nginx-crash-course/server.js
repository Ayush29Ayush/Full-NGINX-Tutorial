require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const appName = process.env.APP_NAME; // Now this should work correctly

// Serve the 'images' folder statically
app.use("/images", express.static(path.join(__dirname, "images")));

// Serve the 'styles.css' file statically
app.use("/styles.css", express.static(path.join(__dirname, "styles.css")));

// Serve the 'index.html' file when visiting the root URL
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log(`Request served by ${appName}`);
});

app.listen(port, () => {
  console.log(`${appName} is listening on port ${port}`);
});
