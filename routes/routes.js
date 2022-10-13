const express = require('express');
const router  = express.Router();
const db = require('../models/index');
const userController = require('../controllers/users');
const { createUser, getUser, listUsers, activateUser, loginUser } = new userController;
const User = db.Users;

//USER ROUTES
// router.post('/signup', async (req, res) => {
//    const { name, email, role } = req.body;

//    if(!name){
//     return res.status(403).json('kindly fill in the input fields to continue');
//    }

//    try{
//     const user = await User.create({ name: name, email: email, role: role }).then((user) => { return user });
//     return res.json(user);

//    }catch(error) {
//     return res.status(500).json(error.message);
//    }
// });


router.post('/signup', async ( req, res ) => {
    const { username, email, role } = req.body;
    const createUsers = await createUser(User, username, email, role);
    return res.json(createUsers);
})


router.get('/users', async ( req, res ) => {
    const allUsers = await listUsers(User);
    return res.json(allUsers);
})

router.get('/user', async ( req, res) => {
    const userID = req.query.uid;
    const foundUser = await getUser(User, userID);
    return res.json(foundUser);
})

module.exports = router;