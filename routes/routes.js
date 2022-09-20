const express = require('express');
const router  = express.Router();
const users = require('../controllers.js/users');


//USER ROUTES
router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/form', (req, res) => {
    res.render('form.html');
});

router.post('/form', users.handleUser);

module.exports = router;