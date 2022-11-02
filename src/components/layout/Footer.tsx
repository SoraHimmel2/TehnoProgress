const Footer: React.FunctionComponent = () => {
  return (
    <footer className='bg-gray-100 text-center text-gray-600 lg:text-left'>
      <div className='flex items-center justify-start border-b border-gray-300 p-6 '>
        <img src='/images/logo-vq.png' className='w-72'></img>
      </div>
      <div className='mx-6  py-10 text-center md:text-left'>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
          <div className='grid grid-cols-1 items-center  md:grid-cols-2'>
            <div className=''>
              <h6 className='mb-4 flex  font-semibold uppercase '>&nbsp;</h6>
              <div className='mb-4 flex items-center justify-start'>
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

                <div className='text-left'>
                  <div className=''>Адрес:&nbsp;</div>
                  <div className=''> г. Санкт-Петербург,</div>
                  <div>ул. 6-я Красноармейская,</div>
                  <div className=''>д. 10, лит. А, ПОМЕЩ. 24</div>
                </div>
              </div>
              <div className='mb-4 flex items-center justify-start'>
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
                <div className='text-left'>
                  <div className=''>Почта: &nbsp;</div>
                  <div className=''>sales@tehnoprogress78.ru</div>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='mb-4 flex items-center justify-start'>
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
                <div className='text-left'>
                  <div>&nbsp;</div>
                  <div className=''>Директор:</div>
                  <div className=' '> 8-921-211-09-40</div>
                </div>
              </div>
              <div className='flex items-center justify-start'>
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

                <div className='text-left'>
                  <div className=''>Отдел продаж: </div>
                  <div className=''> 8-921-956-09-42</div>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 items-center   md:grid-cols-2 xl:grid-cols-3'>
            <div className='mb-4'>
              <div className='text-left'>
                <div className=''>Банк: &nbsp;</div>
                <div className=''>Филиал "Северная столица" &nbsp;</div>
                <div className=''>АО "Райфайзенбанк"</div>
              </div>
            </div>
            <div className='mb-4'>
              <div className='text-left'>
                <div className=''>БИК банка:&nbsp;</div>
                <div className=' '>044030723</div>
              </div>
            </div>

            <div className='mb-4'>
              <div className='text-left '>
                <div className=''>ОГРН: &nbsp;</div>
                <div className=' '>1207800126247</div>
              </div>
            </div>
            <div className='mb-4'>
              <div className='text-left'>
                <div className=''>Расчетный счет: &nbsp;</div>
                <div className=' '>40702810403000066173</div>
              </div>
            </div>

            <div className='mb-4'>
              <div className='text-left'>
                <div className=''>Корреспондентский счет: &nbsp;</div>
                <div className=' '>30101810100000000723</div>
              </div>
            </div>
            <div className='mb-4'>
              <div className='text-left'>
                <div className=''>ИНН/КПП: &nbsp;</div>
                <div className=''>7801688448/783801001</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-200 p-6 text-center'>
        <span>© 2022 Copyright:</span>
        <a
          className='font-semibold text-gray-600'
          href='https://tailwind-elements.com/'
        >
          ООО ТехноПрогресс
        </a>
      </div>
    </footer>
  );
};

export default Footer;

/* <footer className='bg-white text-center text-gray-600 shadow-lg lg:text-left'>
      <div className='flex items-center justify-center border-b border-gray-300 p-6 lg:justify-between'></div>
      <div className='mx-6 py-10 text-center md:text-left'>
        <div className='flex flex-col justify-center gap-10 sm:grid sm:grid-cols-2 lg:flex lg:flex-row'>
          <div className=' border-black '>
            <h6
              className='
              mb-4
              flex
              flex-col 
              items-start
            '
            >
              <img src='/images/logo-vq.png' className='w-72'></img>
            </h6>
          </div>
          {/* <div className='flex flex-col items-start'>
            <h6 className='mb-4 font-semibold uppercase'>Сертификаты</h6>

            <div className='mb-2'>
              <Link href={`/certificates/sertificate1.png`}>
                <a className=''>Festo</a>
              </Link>
            </div>
            <div className='mb-2 '>
              <Link href={`/certificates/sertificate2.png`}>
                <a className='font-mono'>Aignep</a>
              </Link>
            </div>
          </div> */

//       <div className='flex flex-col items-start'>
//         <h6 className=' mb-4 font-semibold uppercase'>Контакты</h6>
//         <div className='flex w-60 flex-wrap'>
//           <div className='font-mono'>Адрес:&nbsp;</div>
//           <div className='font-mono'>г. Санкт-Петербург,</div>
//           <div>ул. 6-я Красноармейская,</div>
//           <div className='mb-2 font-mono'>д. 10, лит. А, ПОМЕЩ. 24</div>
//         </div>

//         <div className='mb-2 flex flex-wrap'>
//           <div className='font-mono'>Почта: &nbsp;</div>
//           <div className='font-mono'>sales@tehnoprogress78.ru</div>
//         </div>
//         <div className='mb-2 flex flex-wrap justify-between '>
//           <div className='font-mono'>Отдел продаж: </div>
//           <div className='font-mono'>&nbsp; 8-921-956-09-42</div>
//         </div>
//         <div className='mb-2 flex flex-wrap justify-between '>
//           <div className='font-mono'>Директор: &nbsp; &nbsp; </div>
//           <div className=' font-mono'>&nbsp; 8-921-211-09-40</div>
//         </div>
//       </div>
//       <div className='flex flex-col items-start'>
//         <h6 className=' mb-4 font-semibold uppercase'>Реквизиты</h6>
//         <div className='flex  w-72 flex-wrap'>
//           <div className='font-mono'>Банк: &nbsp;</div>
//           <div className='font-mono'>Филиал "Северная столица" &nbsp;</div>
//           <div className='mb-2 font-mono'>АО "Райфайзенбанк"</div>
//         </div>
//         <div className='mb-2 flex flex-wrap justify-between '>
//           <div className='font-mono'>БИК банка:&nbsp;</div>
//           <div className=' font-mono'>044030723</div>
//         </div>
//         <div className='mb-2 flex flex-wrap'>
//           <div className='font-mono'>ИНН: &nbsp;</div>
//           <div className='font-mono'>&nbsp;7801688448</div>
//         </div>
//         <div className='mb-2 flex flex-wrap justify-between '>
//           <div className='font-mono'>КПП: &nbsp;</div>
//           <div className='font-mono'>&nbsp;783801001</div>
//         </div>
//         <div className='mb-2 flex flex-wrap justify-between '>
//           <div className='font-mono'>ОГРН: &nbsp;</div>
//           <div className=' font-mono'>1207800126247</div>
//         </div>
//         <div className='mb-2 flex w-80 flex-wrap justify-between'>
//           <div className='font-mono'>
//             Расчетный счет: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//           </div>
//           <div className=' font-mono'>40702810403000066173</div>
//         </div>
//         <div className='mb-2 flex w-80 flex-wrap justify-between'>
//           <div className='font-mono'>Корреспондентский счет: &nbsp;</div>
//           <div className=' font-mono'>30101810100000000723</div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className='bg-white p-6 text-center'>
//     <span>© 2022 Copyright: ООО ТехноПрогресс</span>
//     <a
//       className='font-semibold text-gray-600'
//       href='https://tailwind-elements.com/'
//     ></a>
//   </div>
// </footer> */}
