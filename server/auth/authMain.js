const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController');
const fetchUser = require('./middleware/fetchUser'); // Middleware to fetch user from token
const passResetController = require('./controllers/passResetController');

router.post('/createUser', authController.createUser);
router.post('/login', authController.loginUser);
router.post('/getUser', fetchUser, authController.getUserDetails);
router.post('/updateUser', fetchUser, authController.updateUserDetails);
router.post('/password-reset-request', passResetController.requestPasswordReset);
router.post('/verify-otp', passResetController.verifyOTP); // Verify OTP for password reset
router.post('/reset-password', passResetController.resetPassword); // Request password reset




module.exports = router;
