// index.js

const express = require('express');
const app = express();
const smsRoutes = require('./sms/twilio_sms');
const voiceOtpRoutes = require('./sms/twilio_voice');
const emailRoute = require('./mail/smtp_email');
const auth = require('./auth/authMain');
const dotenv = require('dotenv');
const dbConnect = require('./dbConnect');

app.use(express.json());
dotenv.config();
dbConnect();

// Routes
app.use('/api', smsRoutes);       // /api/send-sms
app.use('/api', voiceOtpRoutes);  // /api/send-voice-otp
app.use('/api', emailRoute);      // /api/send-email
app.use('/api/auth', auth);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
