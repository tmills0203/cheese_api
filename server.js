const express = require("express");
const app = express();
const path = require("path");
const PORT = 8000;

const cheeses = {
  feta: {
    origin: "Greece",
    texture: "creamy, crumbly, grainy and open",
    color: "white",
    flavor: "full-flavored, salty, tangy",
    vegetarian: "no",
  },
  "american cheese": {
    origin: "United States",
    texture: "smooth",
    color: "yellow",
    aroma: "mild",
    vegetarian: "no",
  },
  "smoked gouda": {
    origin: "Netherlands",
    texture: "buttery and crumbly",
    color: "pale yellow",
    flavor: "smokey",
    vegetarian: "no",
  },
  mascarpone: {
    origin: "Italy",
    texture: "buttery, creamy, smooth and spreadable",
    color: "white",
    flavor: "buttery, creamy, mild, milky",
    vegetarian: "yes",
  },
  "abbaye de belloc": {
    origin: "France",
    texture: "creamy, dense and firm",
    color: "yellow",
    flavor: "burnt caramel",
    vegetarian: "yes",
  },
  unknown: {
    origin: "unknown",
    texture: "unknown",
    color: "unknown",
    flavor: "unknown",
    vegetarian: "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/:name", (req, res) => {
  const cheeseName = req.params.name.toLowerCase();

  cheeses[cheeseName]
    ? res.json(cheeses[cheeseName])
    : res.json(cheeses["unknown"]);
});
app.listen(process.env.PORT || PORT, () => {
  console.log(`listening at port ${PORT}`);
});
