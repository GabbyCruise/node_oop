module.exports = class User {
    constructor(){
        this.create = 'creating user data';
        this.details = 'getting user details';
        this.list = 'listing all created users';
    }

    createUser(){
        //create function
        return console.log(this.create)
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