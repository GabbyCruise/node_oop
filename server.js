const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swig = require('swig');
const routes = require('./routes/routes');
const port = 2022;
const app = express();

class Server{
    constructor(){
        // this.initDB();
        this.initViewEngine();
        this.initExpressMiddleware();
        this.initRoutes();
        this.start();
    }

    start(){
        app.listen(port, () => {
            console.log('app started on port ' + port);
        })
    }

    initViewEngine(){
        app.engine('html', swig.renderFile);
        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', 'html');
    };

    initExpressMiddleware(){
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
    };

    initRoutes(){
        app.use(routes)
    };

    // initDB(){
    //     mongoose.connect('mongodb://localhost/meeting');
    // }
}

new Server();