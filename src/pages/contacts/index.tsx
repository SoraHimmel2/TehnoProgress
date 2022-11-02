import Requisites from '@/components/Contacts/Reqisites';
import ContactsInfo from '@/components/Contacts/ContactsInfo';
import Photos from '@/components/Modals/Photo';
import 'semantic-ui-css/semantic.min.css';
import { Image } from '@/components/Modals/Photo';
const Contacts: React.FunctionComponent = () => {
  const images: Image[] = [
    { src: 'images/Aignep.png', id: 1 },
    { src: 'images/Festo.jpg', id: 2 },
  ];
  return (
    <div className='mt-24  '>
      <div className=' mb-12 grid grid-cols-1 lg:grid-cols-[30%_70%]'>
        <div className=' grid grid-rows-1   justify-items-stretch '>
          <div className='mx-12  '>
            <h1 className='text-start'>Контакты</h1>
            <ContactsInfo />
          </div>
          <div className='mx-12 '>
            <h1 className='text-start'>Реквизиты</h1>
            <Requisites />
          </div>
        </div>
        <div className='flex-col justify-center px-12'>
          <h1>Наш адрес</h1>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d500.04836527862614!2d30.314922229286463!3d59.91233657119522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0JDQtNGA0LXRgTogINCzLiDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0YPQuy4gNi3RjyDQmtGA0LDRgdC90L7QsNGA0LzQtdC50YHQutCw0Y8sINC0LiAxMCwg0LvQuNGCLiDQkCwg0J_QntCc0JXQqS4gMjQ!5e0!3m2!1sen!2sru!4v1667392997727!5m2!1sen!2sru'
            loading='lazy'
            className='h-[450px] w-full md:h-[600px] lg:w-[90%]'
          ></iframe>
        </div>
      </div>

      <Photos
        text='Сертификаты'
        textClass='text-center md:text-start mx-12'
        images={images}
      ></Photos>
    </div>
  );
};

export default Contacts;
