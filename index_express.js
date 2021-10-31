var express = require("express");
var app = express();
const cors = require("cors");

app.use(cors());

// gia na boro na stelno apo to react edoles
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.get("/ap1", async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  res.json(["AP1", "AP1", "AP1", "AP1", "AP1"]);
});

app.get("/ap2", async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  res.json(["AP2", "AP2", "AP2", "AP2", "AP2"]);
});

app.get("/ap3", async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  res.json(["AP3", "AP3", "AP3", "AP3", "AP3"]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
