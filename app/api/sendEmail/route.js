import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Connect to MongoDB
const uri = process.env.MONGO_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define the Schema and Model
const submissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Submission = mongoose.model('Submission', submissionSchema);

// API handler
export async function POST(req, res) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), {
        status: 400,
      });
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Compose email
    const mailOptions = {
      from: email,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${email}`,
      text: `
        Name: ${name}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Save submission to MongoDB
    const newSubmission = new Submission({ name, email, message });
    await newSubmission.save();

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({
        errorMessage: 'Failed to send email.',
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
