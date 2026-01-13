'use server'

import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('nume') as string;
  const phone = formData.get('telefon') as string;
  const email = formData.get('email') as string;
  const date = formData.get('data') as string;
  const message = formData.get('mesaj') as string;

  if (!name || !phone || !email || !message) {
    return { error: 'Te rugăm să completezi toate câmpurile obligatorii.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      // IMPORTANT: Until you verify your domain on Resend, you must use 'onboarding@resend.dev'
      // Once verified, change this to 'contact@tomisevents.com' or similar
      from: 'Tomis Events Contact <onboarding@resend.dev>', 
      to: ['office@tomisevents.com'], 
      replyTo: email,
      subject: `Mesaj nou de la ${name} - Tomis Events`,
      text: `
        Nume: ${name}
        Email: ${email}
        Telefon: ${phone}
        Data Eveniment: ${date || 'Nespecificat'}
        
        Mesaj:
        ${message}
      `,
    });

    if (error) {
        console.error('Resend error:', error);
        return { error: 'A apărut o eroare la trimiterea mesajului.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Server error:', error);
    return { error: 'A apărut o eroare neașteptată.' };
  }
}