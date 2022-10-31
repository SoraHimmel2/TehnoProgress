// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { Telegraf } from 'telegraf';

export default function hello(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'Bambang' });
  const BotToken = '5472718351:AAG6QczMElHb4Bxv1dOJWyaLqmFC65SetfM';
  const ChatId = '447411888';
  const text = 'Файл обновлен';
 
    const bot = new Telegraf(BotToken);
    bot.telegram.sendMessage(ChatId, `Телефон: ${"123"} \n Имя: ${text}`);



    // await fetch(`${telegram.url}/bot${telegram.token}/sendMessage?chat_id=${chatId}&text="${data.phone}%OA${data.message}"`);

    console.log("сообщение отправлено");


}
