const express = require("express");

const dillonRouter = require("./router");

const server = express();


server.use(express.json());
server.use("/chores", dillonRouter);
server.use("/", dillonRouter);

server.get("/test", (req, res) => {
    res.status(200).json({ runningOn: process.env.TEST });
});

module.exports = server;