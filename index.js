const server = require("./index.js");

const port = 4001;
server.listen(port, () =>
    console.log(`\n ********** Server is reporting for duty on port ${port} ************* \n`)
);