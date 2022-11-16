// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { Telegraf } from 'telegraf';


export default async function hello(req: NextApiRequest, res: NextApiResponse) {

  const data = req.body;
  const bot = new Telegraf(process.env.BOT_TOKEN);

  bot.telegram.sendMessage(process.env.CHAT_ID, `Телефон: ${data.phone} \nФИО: ${data.name}\nКомпания/должность:\n${data.company}\nEmail: ${data.email}\nКомментарий: ${data.comment}\n`).then(() => {
    res.status(200).json({ response: 'ok-telegram' });
  }).catch(() => {
    res.status(400).json({ response: 'error-telegram' });
  })




}
