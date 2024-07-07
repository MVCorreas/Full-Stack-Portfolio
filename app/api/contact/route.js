//With new version of Next, we need to define HTTP Method, use NextResponse.json, instead of res.status
import { NextResponse } from "next/server";
import { transporter, mailOptions } from "../../../config/nodemailer";

export async function POST(req) {
  const data = await req.json(); // `req.json()` is used to parse the request body in the newer Next.js API routes.

  if (!data || !data.name || !data.email || !data.subject || !data.message) {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
      html: `<h1>${data.subject}</h1><p>${data.message}</p><p>From: ${data.name} (${data.email})</p>`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
