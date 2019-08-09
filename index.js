const server = require("./api/server.js");

const port = 4001;
server.listen(port, () =>
    console.log(`\n ********** Server is reporting for duty on port ${port} ************* \n`)
);