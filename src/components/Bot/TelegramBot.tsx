import Button from '@/components/buttons/Button';
import { useEffect } from 'react';

const TelegramBot: React.FunctionComponent = () => {
  const BotToken = '5472718351:AAG6QczMElHb4Bxv1dOJWyaLqmFC65SetfM';
  const ChatId = '447411888';

  const text = 'Файл обновлен';

  const data = {
    method: 'post',
    sendMessage: {
      method: 'sendMessage',
      chat_id: ChatId,
      text: text,
      parse_mode: 'HTML',
    },
    header: { 'Content-type': 'application/x-www-urlencoded' },
  };
  useEffect(() => {
    fetch('https://api.telegram.org/bot' + BotToken + '/', data);
  });

  return <div></div>;
};

export default TelegramBot;
