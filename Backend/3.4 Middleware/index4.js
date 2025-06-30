import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  // Store the band name in the request object
  req.bandname = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

// Serve the static HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${req.bandname}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
