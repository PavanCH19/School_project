// routes/email.js

const express = require('express');
const router = express.Router();
const transporter = require('./smtp_config.js'); // Import the transporter from smtp_config.js

// Route to send email
router.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    if (!to || !subject || !text) {
        return res.status(400).json({ message: 'To, subject, and text are required.' });
    }

    const mailOptions = {
        from: '"Pavan" <pavandvh27@gmail.com>',
        to,
        subject,
        text
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: '✅ Email sent successfully', info });
    } catch (error) {
        console.error('❌ Error sending email:', error);
        res.status(500).json({ message: 'Error sending email', error });
    }
});

module.exports = router;
