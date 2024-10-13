const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

app.use(
    express.static(
        path.join(__dirname, 'views')
    )
);

// app.get('**', function(req,res,next) {
//     res.send('<h1>Hi there!</h1>');
// })

const port = 3000;

const server = http.createServer(app);
server.listen(port);