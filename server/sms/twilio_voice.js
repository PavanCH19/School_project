// routes/voiceOtp.js

const express = require('express');
const router = express.Router();
const { client, twilioPhoneNumber } = require('./twilio_config.js');

// Send Voice OTP
router.post('/send-voice-otp', async (req, res) => {
    const { phoneNumber, otp } = req.body;

    if (!phoneNumber || !otp) {
        return res.status(400).json({ message: 'Phone number and OTP are required.' });
    }

    try {
        const call = await client.calls.create({
            twiml: `
                <Response>
                    <Say voice="Polly.Aditi" language="en-IN">
                        Namaskara. Nimma OTP sankhye ${otp} ide. Kripaya adannu nirdharisuvaagi pravesisi. Dhanyavaadagalu.
                    </Say>
                </Response>
            `,
            to: phoneNumber,
            from: twilioPhoneNumber
        });

        console.log('Voice OTP call sent! Call SID:', call.sid);
        res.status(200).json({ message: 'Voice OTP call initiated successfully.', callSid: call.sid });
    } catch (error) {
        console.error('Error sending Voice OTP:', error);
        res.status(500).json({ message: 'Failed to send Voice OTP.', error: error.message });
    }
});

module.exports = router;
