import ContactsInfo from '@/components/Contacts/ContactsInfo';
import Requisites from '@/components/Contacts/Reqisites';
import Photos from '@/components/Modals/Photo';
import { Image } from '@/components/Modals/Photo';
import Head from 'next/head';
const Contacts: React.FunctionComponent = () => {
  const images: Image[] = [
    { src: 'images/Festo.jpg', id: 1 },
    { src: 'images/Aignep.png', id: 2 },
  ];
  return (
    <div className='mt-24  '>
      <Head>
        <title>Технопрогресс Контакты</title>
        <link rel='canonical' href='https://tehnoprogress-russia.ru/contacts' />
      </Head>
      <div className=' flex-col'>
        <div className='mx-7 mb-9 grid grid-cols-1  gap-10  md:grid-cols-2 '>
          <ContactsInfo />
          <Requisites />
        </div>

        <div className='flex justify-center '>
          <Photos
            text='Сертификаты'
            textClass='text-center mb-4 mx-12'
            images={images}
          ></Photos>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
