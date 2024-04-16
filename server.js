import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/Routes.js';

class Server {
    constructor() {
        this.app = express();
        this.PORT = process.env.PORT || 3000;

        this.connectToDB();

        this.app.use(bodyParser.json());
        
        this.app.use(routes.initializeRouter());

        this.startServer();
    }

    connectToDB() {
        mongoose.connect('mongodb+srv://anmolsankadiya:anmol@cluster0.y6u1lez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(()=>{
            console.log('MongoDB Connected')
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    startServer() {
        this.app.listen(this.PORT, (err) => {
            if(!err){
                console.log(`Server is running on port ${this.PORT}`);
            }
            else{
                console.log('Server has failed to start');
            }
        })}
}

const server = new Server();
export default server;