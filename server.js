const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

class Server {
    constructor() {
        this.app = express();
        this.PORT = process.env.PORT || 3000;

        this.connectToDB();

        this.app.use(bodyParser.json());

        this.app.use(routes);

        this.startServer();
    }