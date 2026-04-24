import nodemailer from 'nodemailer';
import dotenv from 'dotenv'

dotenv.config()

// Set up the transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.NODEMAILER_EMAIL, // Your email
    pass: process.env.NODEMAILER_PASS, // Your App Password
  },
});

export default transporter
