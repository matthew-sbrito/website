import { NextResponse } from 'next/server';

import { backEnv } from '@/env';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: backEnv.NODE_MAILER_HOST,
  port: backEnv.NODE_MAILER_PORT,
  secure: true,
  auth: {
    user: backEnv.NODE_MAILER_EMAIL,
    pass: backEnv.NODE_MAILER_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: backEnv.SEND_EMAIL_TO,
      subject: 'Someone got in touch to you',
      html: `
        <h2>New message from your website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error while trying send email.' },
      { status: 500 }
    );
  }
}
