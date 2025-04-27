// index.js

const express = require('express');
const app = express();
const smsRoutes = require('./sms/twilio_sms');
const voiceOtpRoutes = require('./sms/twilio_voice');
const emailRoute = require('./mail/smtp_email');

app.use(express.json());

// Routes
app.use('/api', smsRoutes);       // /api/send-sms
app.use('/api', voiceOtpRoutes);  // /api/send-voice-otp
app.use('/api', emailRoute);      // /api/send-email

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
