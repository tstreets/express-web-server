const express = require("express");

const app = express();
app.use(express.json());

const peeps = [];

app.get("/api/peep", function (req, res) {
  res.status(200).json({ peeps: peeps });
});

app.post("/api/peep", function (req, res) {
  const dateCreated = Date.now();
  const peepData = { ...req.body, dateCreated: dateCreated };
  peeps.push(peepData);
  res.status(200).json(peepData);
});

const port = process.env.PORT || 3000;

app.listen(port);

module.exports = app;
