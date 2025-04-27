// routes/sms.js

const express = require('express');
const router = express.Router();
const { client, twilioPhoneNumber } = require('./twilio_config.js');

// Send SMS
router.post('/send-sms', async (req, res) => {
    const { phoneNumber, message } = req.body;

    if (!phoneNumber || !message) {
        return res.status(400).json({ message: 'Phone number and message are required.' });
    }

    try {
        const msg = await client.messages.create({
            body: message,
            to: phoneNumber,
            from: twilioPhoneNumber
        });

        console.log('SMS sent! SID:', msg.sid);
        res.status(200).json({ message: 'SMS sent successfully.', sid: msg.sid });
    } catch (error) {
        console.error('Error sending SMS:', error);
        res.status(500).json({ message: 'Failed to send SMS.', error: error.message });
    }
});

module.exports = router;
