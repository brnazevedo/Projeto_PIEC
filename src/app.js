'use strict'

const express = require('express');
const bodyparser = require("body-parser");
const app = express();
const router = express.Router();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//carrega rota get index
const index = require("./routes/index-route");
const routes = require("./routes/routes");

app.use('/',index);
app.use('/',routes);
module.exports = app;