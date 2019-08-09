const express = require("express");

const dillonRouter = require("./router");

const server = express();


server.use(express.json());
server.use("/:personId/chores", dillonRouter);
server.use("/", dillonRouter);

server.get("/", (req, res) => {
    res.status(200).json({ message: "local server" });
});

module.exports = server;