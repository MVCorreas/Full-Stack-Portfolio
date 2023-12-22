// import { EmailTemplate } from '../../components/EmailTemplate';
// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from: 'Maria Victoria Correas <correasmv@gmail.com>',
//       to: ['correasmv@gmail.com'],
//       subject: 'Hello world',
//       react: EmailTemplate({ firstName }),
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }

// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [fromEmail, email],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting me!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }

// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer'

// export async function POST(request) {
//     try {
//         const { subject, message } = await request.json();

//         // const transporter = nodemailer.createTransport({
//         //     service: 'gmail',
//         //     host: 'smtpro.zoho.in',
//         //     port: 465,
//         //     secure: true,
//         //     auth: {
//         //         user: process.env.NEXT_PUBLIC_USERNAME,
//         //         pass: process.env.NEXT_PUBLIC_PASSWORD
//         //     }
//         // })

//         let transporter = nodemailer.createTransport({
//           service: 'gmail',
//           auth: {
//             type: 'OAuth2',
//             user: process.env.NEXT_PUBLIC_USERNAME,
//             pass: process.env.NEXT_PUBLIC_PASSWORD,
//             clientId: process.env.NEXT_OAUTH_CLIENTID,
//             clientSecret: process.env.NEXT_OAUTH_CLIENT_SECRET,
//             refreshToken: process.env.NEXT_OAUTH_REFRESH_TOKEN
//           }
//         });

//         const mailOption = {
//             from: 'correasmv@gmail.com',
//             to: 'correasmv@gmail.com',
//             subject: "Send Email Tutorial",
//             html: `
//         <h3>Hello Vic</h3>
//         <li> title: ${subject}</li>
//         <li> message: ${message}</li> 
//         `
//         }
//         // let mailOptions = {
//         //   from: "correasmv@gmail.com",
//         //   to: "correasmv@gmail.com",
//         //   subject: 'Nodemailer Project',
//         //   text: 'Hi from your nodemailer project'
//         // };

//         await transporter.sendMail(mailOptions)
//         // transporter.sendMail(mailOptions, function(err, data) {
//         //   if (err) {
//         //     console.log("Error " + err);
//         //   } else {
//         //     console.log("Email sent successfully");
//         //   }
//         // });

//         return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
//     } catch (error) {
//         return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
//     }
// }

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

