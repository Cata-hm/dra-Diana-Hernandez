// controllers/contactController.ts
// This controller handles contact form submissions
import { Router } from 'express';
import nodemailer from 'nodemailer';
//import { db } from '../db/connect';

const contactRouter = Router();

contactRouter.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Faltan datos obligatorios' });
  }

  try {
    // 1. Guardar en MongoDB (colección 'contacts')
    /*const contactsCollection = db.collection('contacts');
    await contactsCollection.insertOne({ name, email, message, date: new Date() });*/

    // 2. Enviar email con nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // tu correo Gmail (el que manda)
        pass: process.env.EMAIL_PASS, // tu contraseña o app password
      },
    });

    const mailOptions = {
      from: email, // correo del visitante
      to: process.env.EMAIL_CLIENT_USER, // tu correo Gmail que recibe el mensaje
      subject: `[Dra. Diana Hernandez] Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
          <div style="
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background: #fff;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            text-align: center;
          ">
            <h2 style="color: #007BFF; margin-bottom: 20px;">Nuevo mensaje de contacto</h2>
            <p style="text-align: left;"><strong>Nombre:</strong> ${name}</p>
            <p style="text-align: left;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="text-align: left;"><strong>Mensaje:</strong></p>
            <div style="
              padding: 10px;
              background: #f9f9f9;
              border: 1px solid #ddd;
              border-radius: 4px;
              text-align: left;
              white-space: pre-wrap;
            ">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <hr style="margin-top: 20px; border-color: #eee;">
            <p style="font-size: 12px; color: #999; margin-top: 20px;">Este mensaje fue enviado desde el formulario de contacto de Metodical.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Mensaje enviado y guardado correctamente.' });

  } catch (error) {
    console.error('Error en /contact:', error);
    res.status(500).json({ success: false, message: 'Error interno del servidor' });
  }
});

export default contactRouter;
