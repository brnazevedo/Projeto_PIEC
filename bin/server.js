'use strict'

const http = require('http');
const app = require('../src/app');
const debug = require ('debug')('projeto-server');
const port = '3000';
app.set('port',port);

const server = http.createServer(app);


server.listen(port);
console.log("API rodando na porta "+port);