import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your email app password
        },
      });

      // Compose email
      const mailOptions = {
        from: email, // Sender's email
        to: process.env.RECEIVER_EMAIL, // Your receiving email address
        subject: `New Contact Form Submission from ${name}`,
        text: `
          Name: ${name}
          Message: ${message}
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ 
        errorMessage: 'Failed to send email.',
        error:error
     });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
