// const { User } = require('../models/user');
module.exports = class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    validateCredentials(){
        if(!this.username){
            throw new Error('kindly enter your username');
        }//continue from here
    }

    createUser(){
        //create function
        const { name, email, role } = req.body;
        const user =  User.create({ name, email, role})
        return user
    }

    getUser(){
        //details function
        return console.log(this.details)
    };

    listUsers(){
        //list function
        return console.log(this.list);
    }
};

// module.exports = User;