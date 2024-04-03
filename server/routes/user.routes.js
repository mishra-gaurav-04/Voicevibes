const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const {verifyAccessToken} = require('../services/token-service');

// auth routes

router.post('/register',authController.register);
router.post('/login',authController.login);
router.post('/refresh',authController.refresh);
router.delete('/logout',authController.logout);

// user routes
router.get('/test',verifyAccessToken,(req,res,next) => {
    res.send('Hello from test');
})

module.exports = router;