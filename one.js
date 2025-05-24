const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;
const datasnakes = fs.readFileSync("data.json", "utf-8");
const data = JSON.parse(datasnakes);
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    noOfSnakes: data.length,
    data,
  });
});
app.get("/:name", (req, res) => {
  const name = req.params.name;
  const Name = data.find((el) => el.name == name);
  res.status(200).send(Name);
});
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
