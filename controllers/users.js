module.exports = class User {
    // constructor(username, email, password){
    //     this.username = username;
    //     this.email = email;
    //     this.password = password;
    // }

    constructor(){

    };

    //USER SIGN UP
    createUser(Model, username, email, role){
       if(!username || !email){
        return 'kindly enter your username';
       }

       const userDetails = {
        name: username,
        email: email,
        role: role,
       }

       const saveUser = Model.create(userDetails).then(( user ) => { return user })
       return saveUser;
    }


    //ALL USER LIST
    listUsers(Model){
        const users = Model.findAll({});
        return users;
    }



    //GET SINGLE USER
    getUser(Model, id){
        if(!id){
            return 'kindly supply user id to be returned.';
        };

        const user = Model.findOne({ where : { guid: id }});
        const notFound = "No matching record found";

        return user != null ? user : notFound ;
    };

    
    //ACTIVATE USER
    activateUser(){

    }


    //LOGIN USER
    loginUser(){
        
    }

    
};

// module.exports = User;