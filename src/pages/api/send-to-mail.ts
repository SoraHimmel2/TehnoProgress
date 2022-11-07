import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next';

export default async function hello(req: NextApiRequest, res: NextApiResponse) {

  const data = req.body;


  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'AmelkinAndreiU@yandex.ru', // generated ethereal user
      pass: 'skllosfxycctquqy'  // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  const mailOptions = {
    from: 'AmelkinAndreiU@yandex.ru', // sender address
    to: 'AmelkinAndreiU@yandex.ru', // list of receivers
    subject: 'Клиенты', // Subject line
    text: `Телефон: ${data.phone} \nФИО: ${data.name}\nКомпания/должность:\n${data.company}\nEmail: ${data.email}\nКомментарий: ${data.comment}\n`, // plain text body

  };
  transporter.sendMail(mailOptions).then(() => {
    res.status(200).json({ error: 'ok' });
  });

};
