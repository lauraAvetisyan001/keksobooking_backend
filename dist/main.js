"use strict";

var _data = require("./data.js");
var http = require('http');
var fs = require('fs');
var photos = fs.readFileSync('photos.txt', 'utf8');
fs.writeFileSync('photos.txt', JSON.stringify(_data.dataHouse));
http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/offers' && req.method === 'POST') {
    console.log(req.method);
    var body = '';
    req.on('data', function (data) {
      body += data.toString();
    });
    req.on('end', function () {
      var newData = JSON.parse(body);
      var updateData = JSON.parse(fs.readFileSync('photos.txt', 'utf8'));
      updateData.push(newData);
      fs.writeFileSync('photos.txt', JSON.stringify(updateData));
      res.write(JSON.stringify(fs.readFileSync('photos.txt')));
      res.end(JSON.stringify(updateData));
    });
  } else if (req.url === '/offers' && req.method === 'GET') {
    res.end(photos);
  }
}).listen(3000, 'localhost');