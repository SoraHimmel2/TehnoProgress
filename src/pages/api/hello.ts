// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { Telegraf } from 'telegraf';

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
 
  const BotToken = '5472718351:AAG6QczMElHb4Bxv1dOJWyaLqmFC65SetfM';
  const ChatId = '447411888';
  const text = 'Файл обновлен';
 
  if(req.body.length > 0){
    console.log('req');
    console.log(req.body);
    const data = req.body;

    const bot = new Telegraf(BotToken);
    bot.telegram.sendMessage(ChatId, `Телефон: ${data.phone} \nФИО: ${data.name}\nКомпания/должность:\n${data.company}\nEmail: ${data.email}\nКомментарий: ${data.comment}\n`).catch((e)=>{res.status(200).json({ error: e });} )

  
    res.status(200).json({ name: '' });
  }
   

}
