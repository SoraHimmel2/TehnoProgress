import ContactsInfo from '@/components/Contacts/ContactsInfo';
import Requisites from '@/components/Contacts/Reqisites';
import Photos from '@/components/Modals/Photo';
import { Image } from '@/components/Modals/Photo';
const Contacts: React.FunctionComponent = () => {
  const images: Image[] = [
    { src: 'images/Aignep.png', id: 1 },
    { src: 'images/Festo.jpg', id: 2 },
  ];
  return (
    <div className='mt-24  '>
      <div className=' flex-col'>
        <div className='mx-12 mb-4 grid grid-cols-1  gap-10  md:grid-cols-2 '>
          <Requisites />

          <ContactsInfo />
        </div>
        <div className='mx-12'>
          <h1 className='my-2 text-center'>Наш адрес</h1>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d500.04836527862614!2d30.314922229286463!3d59.91233657119522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0JDQtNGA0LXRgTogINCzLiDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0YPQuy4gNi3RjyDQmtGA0LDRgdC90L7QsNGA0LzQtdC50YHQutCw0Y8sINC0LiAxMCwg0LvQuNGCLiDQkCwg0J_QntCc0JXQqS4gMjQ!5e0!3m2!1sen!2sru!4v1667392997727!5m2!1sen!2sru'
            loading='lazy'
            className='h-[450px] w-full  lg:w-[100%]'
          ></iframe>
        </div>
        <div className='flex justify-center '>
          <Photos
            text='Сертификаты'
            textClass='text-center  mx-12'
            images={images}
          ></Photos>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
