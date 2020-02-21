const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const server = express();

//here we are configuring dist to serve app files
server.use('/', serveStatic(path.join(__dirname, '/dist')));

// this * route is to serve project on different page routes except root `/`
server.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'));
})

const port = process.env.PORT || 4000;
server.listen(port);
console.log(`server is listening on port: ${port}`);