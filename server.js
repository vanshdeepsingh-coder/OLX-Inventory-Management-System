const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/Routes.js');

class Server {
    constructor() {
        this.app = express();
        this.PORT = process.env.PORT || 3000;

        this.connectToDB();

        this.app.use(bodyParser.json());

        this.app.use(routes);

        this.startServer();
    }

    connectToDB() {
        mongoose.connect('mongodb+srv://anmolsankadiya:anmol@cluster0.y6u1lez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));
    }

    startServer() {
        this.app.listen(this.PORT, () => {
            console.log(`Server is running on port ${this.PORT}`);
        });
    }
}

const server = new Server();