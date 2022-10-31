// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { Telegraf } from 'telegraf';

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
 
  const BotToken = '5472718351:AAG6QczMElHb4Bxv1dOJWyaLqmFC65SetfM';
  const ChatId = '447411888';
  const text = 'Файл обновлен';
 
    const bot = new Telegraf(BotToken);
    bot.telegram.sendMessage(ChatId, `Телефон: ${"123"} \n Имя: ${text}`);



 

    console.log("сообщение отправлено");
    res.status(200).json({ name: 'Bambang1' });

}
