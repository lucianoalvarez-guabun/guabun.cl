import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, turnstileToken } = body;

    // Validar campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'Captcha requerido' },
        { status: 400 }
      );
    }

    // Verificar Turnstile token
    const turnstileResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    );

    const turnstileData = await turnstileResponse.json();

    if (!turnstileData.success) {
      return NextResponse.json(
        { error: 'Verificación de captcha fallida' },
        { status: 400 }
      );
    }

    // Enviar email con Resend
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Guabún Web <contacto@guabun.cl>',
        to: [process.env.CONTACT_EMAIL || 'hablemos@guabun.cl'],
        replyTo: email,
        subject: `Nuevo mensaje de ${name}`,
        html: `
          <h2>Nuevo mensaje desde guabun.cl</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });
    } else {
      // Si no hay Resend configurado, solo logueamos
      console.log('Mensaje recibido:', { name, email, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error en API de contacto:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}
