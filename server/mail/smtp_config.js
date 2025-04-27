// config/smtpConfig.js

const nodemailer = require('nodemailer');

// Create secure transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'pavandvh27@gmail.com',      // Your Gmail ID
        pass: 'gtby qvua qkcr fwgv'         // Your Gmail App Password
    }
});

// Optional: Verify connection
transporter.verify(function (error, success) {
    if (error) {
        console.error('❌ SMTP connection error:', error);
    } else {
        console.log('✅ SMTP server is ready to send emails');
    }
});

module.exports = transporter;
