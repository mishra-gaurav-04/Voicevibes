const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// auth routes

router.post('/register',authController.register);
router.post('/login',authController.login);
router.post('/refresh',authController.refresh);
router.delete('/logout',authController.logout);

module.exports = router;