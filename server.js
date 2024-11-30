import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define the API route
export async function POST(req) {
  const { name, email, message } = await req.json();

  // Validate input
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required.' }), {
    status: 400,      
    });
  }

  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Compose email
    const mailOptions = {
      from: email, // Sender's email
      to: process.env.RECEIVER_EMAIL, // Recipient email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}\n
        Email: ${email}\n
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully.' }), {
      status: 200,
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({
        errorMessage: 'Failed to send email.',
        error,
      }),
      { status: 500 }
    );
  }
}