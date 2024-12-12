import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Connect to MongoDB
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Define the Schema and Model
const submissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  title: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const EmailSubmissions = mongoose.model('EmailSubmissions', submissionSchema);

// API handler
export async function POST(req, res) {
  try {
    const { name, email,  title, message } = await req.json();

    // Validate input
    if (!name || !email || !title || !message) {
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
      from: `"T Λ P - website" <no-reply@gmail.com>`,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `${name.toUpperCase()} sent email from T Λ P - Website`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 16px; background-color: #F9FAFB; border-radius: 8px;">
          <h2 style="font-size: 1rem; font-weight: bold; color: #1D4ED8;">${title}</h2>
          <p style="margin-bottom: 8px;"><strong>Sender's email:</strong> ${email}</p>
          <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
          <div style="background-color: #F3F4F6; padding: 8px; border: 1px solid #D1D5DB; border-radius: 8px;">
            ${message}
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Save submission to MongoDB
    const newSubmission = new EmailSubmissions({ name, title, email, message });
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
