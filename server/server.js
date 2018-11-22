const path = require("path");
const express = require("express");

const server = express();

server.use(express.static(path.join(__dirname, "../client/components")));
server.use(express.static(path.join(__dirname, "../public")));

module.exports = server;
