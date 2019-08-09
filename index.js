const server = require("./server.js");

const cTable = require('console.table');

port = 4001

server.listen(port, () =>
    console.table([`\n ********** Server is reporting for duty on port ${port} ************* \n`])
);