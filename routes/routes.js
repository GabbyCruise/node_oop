const express = require('express');
const router  = express.Router();
const api_response = require('../middleware/apiResponses');
const userController = require('../controllers/user_controller');
const { createUser, allUserList } = new userController;
const version = "BNKV_001";


router.post('/signup', async ( req, res ) => {
  try{

    const { username, email, role, branch } = req.body;
    const userSignup = await createUser({api_response}, {username, email, role, branch });
    return res.json(userSignup);

   } catch ( error ) {
    return res.status(500).json(api_response.failure('/signup',version, error.message ))
   }
});

router.get('/users', async ( req, res ) => {
    try{
        const allUsers = await allUserList();
        return allUsers
        return res.json(api_response.resWithData(allUsers, allUserList.length, version, '/users'));
    } catch ( error ){
        return res.status(500).json(api_response.failure('/users',version, error.message ))
    }
});

module.exports = router;