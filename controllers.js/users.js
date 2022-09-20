const services = require('../services/userService');

const UserServices = new services();

exports.handleUser = async ( req, res ) => {
    UserServices.createUser();
}