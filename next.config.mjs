/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';

dotenv.config();

const nextConfig = {
    env: {
        EMAIL_USER:process.env.EMAIL_USER,
        EMAIL_PASS:process.env.EMAIL_PASS,
        RECEIVER_EMAIL:process.env.RECEIVER_EMAIL,
    },
};

export default nextConfig;
