//? PAGE CON SENDING EMAIL

require('dotenv').config(); // Carica le variabili d'ambiente dal file .env
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3001;

console.log('EMAIL_USER:', process.env.EMAIL_USER); // Log per verificare le variabili d'ambiente
console.log('EMAIL_PASS:', process.env.EMAIL_PASS); // Log per verificare le variabili d'ambiente

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Usa la variabile d'ambiente
    pass: process.env.EMAIL_PASS  // Usa la variabile d'ambiente
  }
});

app.post('/login', (req, res) => {
  const { email, phoneNumber } = req.body;
  const loginTime = new Date().toLocaleString();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: ['simo.bara12@gmail.com', email], // Invia sia al tuo indirizzo che all'indirizzo dell'utente
    subject: 'Nuovo login',
    text: `Numero di cellulare: ${phoneNumber}\nEmail: ${email}\nOra di accesso: ${loginTime}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Errore durante l\'invio della mail:', error);
      return res.status(500).json({ success: false, message: error.message });
    }
    res.json({ success: true, message: 'Credenziali inviate con successo' });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


//? PAGE CON OTP
// const express = require('express');
// const bodyParser = require('body-parser');
// const twilio = require('twilio');
// const cors = require('cors');

// const app = express();
// const port = 3001;

// app.use(bodyParser.json());
// app.use(cors());

// const accountSid = 'your_twilio_account_sid'; // Trova queste informazioni nella tua dashboard Twilio
// const authToken = 'your_twilio_auth_token';
// const client = twilio(accountSid, authToken);

// let otpStore = {}; // Una semplice memoria per memorizzare OTP temporaneamente

// app.post('/send-otp', (req, res) => {
//   const { phoneNumber } = req.body;
//   const otp = Math.floor(100000 + Math.random() * 900000).toString();

//   otpStore[phoneNumber] = otp;

//   client.messages
//     .create({
//       body: `Your OTP code is ${otp}`,
//       from: 'your_twilio_phone_number',
//       to: phoneNumber,
//     })
//     .then((message) => res.json({ success: true, message: 'OTP sent' }))
//     .catch((error) => res.status(500).json({ success: false, message: error.message }));
// });

// app.post('/verify-otp', (req, res) => {
//   const { phoneNumber, otp } = req.body;
//   if (otpStore[phoneNumber] === otp) {
//     delete otpStore[phoneNumber];
//     res.json({ success: true, message: 'OTP verified' });
//   } else {
//     res.status(400).json({ success: false, message: 'Invalid OTP' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
