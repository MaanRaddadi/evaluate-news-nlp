var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const meaningCloudUrl = "https://api.meaningcloud.com/sentiment-2.1";
const apiKey = process.env.API_KEY;

const app = express();

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

console.log(__dirname);

// Variables for url and api key

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// POST Route
app.post("/api", async function (req, res) {
  const analisysDataRes = await callMeaningCloud(req.body.url);
  console.log(analisysDataRes);
  res.send(analisysDataRes);
});

async function callMeaningCloud(blogUrl) {
  const formData = new FormData();
  formData.append("key", apiKey);
  formData.append("language", "en");
  formData.append("url", blogUrl);
  let payload = {
    method: "POST",
    body: formData,
    redirect: "follow",
  };

  const data = await fetch(meaningCloudUrl, payload);
  const response = await data.json();
  return response;
}

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
  console.log("Example app listening on port 8000!");
});
