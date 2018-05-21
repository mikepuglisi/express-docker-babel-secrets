
import app from './app';
console.log('app12223322', app)
const { PORT = 8080 } = process.env;


app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console

/*
var express = require('express')
var app = express();
app.listen('8080', () => console.log(`Listening on port 8080`)); // eslint-disable-line no-console
*/

