
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { subject, message } = await request.json();

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.NEXT_PUBLIC_USERNAME,
                pass: process.env.NEXT_PUBLIC_PASSWORD,
                clientId: process.env.NEXT_OAUTH_CLIENTID,
                clientSecret: process.env.NEXT_OAUTH_CLIENT_SECRET,
                refreshToken: process.env.NEXT_OAUTH_REFRESH_TOKEN
            }
        });

        const mailOptions = {
            from: 'correasmv@gmail.com',
            to: 'correasmv@gmail.com',
            subject: "Send Email Tutorial",
            html: `
                <h3>Hello Vic</h3>
                <li> title: ${subject}</li>
                <li> message: ${message}</li> 
            `
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 });
    }
}

