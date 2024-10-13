const http = require("http");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "views")));

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

// app.get('**', function(req,res,next) {
//     res.send('<h1>Hi there!</h1>');
// })

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);
