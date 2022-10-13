const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
// const mongoose = require('mongoose');
const routes = require('./routes/routes');
const { sequelize } = require('./models');
// const errorHandler = require('./services/errorHandler');

const port = 2022;
const app = express();

class Server{
    constructor(){
        this.initDB();
        // this.ErrorHandler();
        this.initExpressMiddleware();
        this.initRoutes();
        this.start();
    }

    start(){
        app.listen(port, () => {
            console.log('app started on port ' + port);
        })
    }

    initExpressMiddleware(){
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(logger('dev'));
    };

    // ErrorHandler(){
    //     app.use(errorHandler);//keep an eye
    // }

    initRoutes(){
        app.use(routes)
    };

    initDB(){
        async function connect(){
            await sequelize.authenticate();
            console.log('Connection established!.')
        }
        // mongoose.connect('mongodb://localhost/meeting');
        connect();
    }
}

new Server();