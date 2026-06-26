import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const host = process.env.EMAIL_HOST;
    const port = Number(process.env.EMAIL_PORT || 587);
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const to = process.env.EMAIL_TO || 'gergroup11@gmail.com';

    if (!host || !user || !pass || pass.includes('your_gmail_app_password')) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email not configured',
          mailto: `mailto:${to}?subject=${encodeURIComponent('Үнийн санал хүсэлт')}&body=${encodeURIComponent(
            `Нэр: ${name}\nИмэйл: ${email}\nУтас: ${phone}\n\n${message}`
          )}`,
        },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"${name}" <${user}>`,
      to,
      replyTo: email,
      subject: 'Вебээс ирсэн үнийн саналын хүсэлт',
      text: `Нэр: ${name}\nИмэйл: ${email}\nУтас: ${phone}\n\nМессеж:\n${message}`,
      html: `
        <h2>Вебээс ирсэн үнийн саналын хүсэлт</h2>
        <p><strong>Нэр:</strong> ${name}</p>
        <p><strong>Имэйл:</strong> ${email}</p>
        <p><strong>Утас:</strong> ${phone}</p>
        <p><strong>Мессеж:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
