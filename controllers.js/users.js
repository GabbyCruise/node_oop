const services = require('../services/userService');

const UserServices = new services();

exports.handleUser = async ( req, res ) => {
    const user = await UserServices.createUser();
    return res.json(user);
}