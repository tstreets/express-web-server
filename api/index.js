const express = require('express');
const app = express();

const peeps = [];

app.get("/api/peep", function(req, res)  {
    res.status(200).json({ peeps: peeps })
})

app.post("/api/peep", function(req, res) {
    const newPeep = { ...req.body };
    res.status(200).json(newPeep)
})

const port = process.env.PORT || 3000;

app.listen(port);

module.exports = app;
