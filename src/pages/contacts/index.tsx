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
        <div className='mb-4 grid  grid-cols-1  md:grid-cols-2'>
          <div className='mx-12  '>
            <div className='flex flex-row items-center justify-center'>
              <h1 className='mx-4 text-start'>Реквизиты</h1>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                enable-background='new 0 0 36 36'
                height='40px'
                viewBox='0 0 40 40'
                width='40px'
                fill='#000000'
              >
                <g>
                  <rect fill='none' height='40' width='40' />
                  <path d='M20.41,8.41l-4.83-4.83C15.21,3.21,14.7,3,14.17,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V9.83 C21,9.3,20.79,8.79,20.41,8.41z M7,7h7v2H7V7z M17,17H7v-2h10V17z M17,13H7v-2h10V13z' />
                </g>
              </svg>
            </div>

            <Requisites />
          </div>
          <div className='mx-12 '>
            <div className='flex flex-row items-center justify-center'>
              <h1 className='mx-4 text-start'>Контакты</h1>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='phone'
                className='mr-4 w-6'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z'
                ></path>
              </svg>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='envelope'
                className='mr-4 w-6'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
                ></path>
              </svg>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='home'
                className='mr-4 w-6'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
              >
                <path
                  fill='currentColor'
                  d='M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z'
                ></path>
              </svg>
            </div>

            <ContactsInfo />
          </div>
        </div>
        <div className='flex justify-center '>
          <Photos
            text='Сертификаты'
            textClass='text-center  mx-12'
            images={images}
          ></Photos>
        </div>

        {/* <div>
            <h1>Наш адрес</h1>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d500.04836527862614!2d30.314922229286463!3d59.91233657119522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0JDQtNGA0LXRgTogINCzLiDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0YPQuy4gNi3RjyDQmtGA0LDRgdC90L7QsNGA0LzQtdC50YHQutCw0Y8sINC0LiAxMCwg0LvQuNGCLiDQkCwg0J_QntCc0JXQqS4gMjQ!5e0!3m2!1sen!2sru!4v1667392997727!5m2!1sen!2sru'
              loading='lazy'
              className='h-[450px] w-full  lg:w-[100%]'
            ></iframe>
          </div> */}
      </div>
    </div>
  );
};

export default Contacts;
