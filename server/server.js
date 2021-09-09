require('./config/config');
const express = require('express');
const cors = require('cors')
const http = require('http');


const app = express();
app.use(cors())
let server = http.createServer(app);  /** * Http Server @type {Server} */

/**
 * parse application/json
 */
app.use( express.json());

/**
 * Configuration Global Routes
 */
app.use( require('./routes/index') );

server.listen(process.env.PORT, () => {
    console.log( `Listening on port ${process.env.PORT}`);
})