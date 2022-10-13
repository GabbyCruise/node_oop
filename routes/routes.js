const express = require('express');
const router  = express.Router();
const db = require('../models/index');
const User = db.Users;

//USER ROUTES
router.post('/signup', async (req, res) => {
   const { name, email, role } = req.body;

   if(!name){
    return res.status(403).json('kindly fill in the input fields to continue');
   }

   try{
    const user = await User.create({ name: name, email: email, role: role }).then((user) => { return user });
    return res.json(user);

   }catch(error) {
    return res.status(500).json(error.message);
   }
});

router.get('/users', async ( req, res) => {
    try{
        const allUsers = await User.findAll({}).then(( user ) => { return user})
        return res.json(allUsers);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json(error)
    }
});

module.exports = router;