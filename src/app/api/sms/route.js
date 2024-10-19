import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function GET() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL,
            pass: process.env.NEXT_PUBLIC_PASSWORD,
        }
    });

    const mailOptions = {
        from: process.env.NEXT_PUBLIC_EMAIL,
        to: process.env.NEXT_PUBLIC_NUMBER,
        subject: 'ALERT',
        text: 'Joe is at risk of homelessness in Dallas Tx, age 18, gender m'
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error:  error }, { status: 500 });
    }
    return NextResponse.json({ success: "Successful" }, { status: 200 });
}