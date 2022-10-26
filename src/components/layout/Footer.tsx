import Link from 'next/link';
const Footer: React.FunctionComponent = () => {
  return (
    <footer className='bg-white text-center text-gray-600 shadow-lg lg:text-left'>
      <div className='flex items-center justify-center border-b border-gray-300 p-6 lg:justify-between'></div>
      <div className='mx-6 py-10 text-center md:text-left'>
        <div className='flex-col justify-center gap-10 md:flex md:flex-row'>
          <div className=' border-black '>
            <h6
              className='
              mb-4
              flex
              flex-col 
              items-start
            '
            >
              {/* <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='cubes'
                className='mr-3 w-4'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z'
                ></path>
              </svg> */}
              <img src='/images/logo-vq.png' className='w-96'></img>
            </h6>
          </div>
          <div className='flex flex-col items-start'>
            <h6 className='mb-4 font-semibold uppercase'>Сертификаты</h6>

            <div className='mb-2'>
              <Link href={`/certificates/sertificate1.png`}>
                <a className='font-mono'>Festo</a>
              </Link>
            </div>
            <div className='mb-2 '>
              <Link href={`/certificates/sertificate2.png`}>
                <a className='font-mono'>Aignep</a>
              </Link>
            </div>
          </div>

          <div className='flex flex-col items-start'>
            <h6 className=' mb-4 font-semibold uppercase'>Контакты</h6>
            <div className='flex w-60 flex-wrap'>
              <div className='font-mono'>Адрес :&nbsp;</div>
              <div className='font-mono'>г. Санкт-Петербург,</div>
              <div>ул. 6-я Красноармейская,</div>
              <div className='mb-2 font-mono'>д. 10, лит. А, ПОМЕЩ. 24</div>
            </div>

            <div className='mb-2 flex flex-wrap'>
              <div className='font-mono'>Почта : &nbsp;</div>
              <div className='font-mono'>sales@tehnoprogress78.ru</div>
            </div>
            <div className='mb-2 flex flex-wrap justify-between '>
              <div className='font-mono'>Отдел продаж : </div>
              <div className='font-mono'>8-921-956-09-42</div>
            </div>
            <div className=' flex flex-wrap justify-between '>
              <div className='font-mono'>Директор &nbsp; &nbsp; :</div>
              <div className=' font-mono'>8-921-211-09-40</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white p-6 text-center'>
        <span>© 2022 Copyright: ООО ТехноПрогресс</span>
        <a
          className='font-semibold text-gray-600'
          href='https://tailwind-elements.com/'
        ></a>
      </div>
    </footer>
  );
};

export default Footer;
