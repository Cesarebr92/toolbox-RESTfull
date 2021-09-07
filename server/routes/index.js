const express = require('express');
const app = express();

app.use( require('./echo') );


module.exports = app;