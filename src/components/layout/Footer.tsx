import Link from 'next/link';
const Footer: React.FunctionComponent = () => {
  return (
    <footer className='bg-white text-center text-gray-600 shadow-lg lg:text-left'>
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
              <img src='/images/logo-vq.png' className='w-96'></img>
            </h6>
          </div>
          {/* <div className='flex flex-col items-start'>
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
          </div> */}

          <div className='flex flex-col items-start'>
            <h6 className=' mb-4 font-semibold uppercase'>Контакты</h6>
            <div className='flex w-60 flex-wrap'>
              <div className='font-mono'>Адрес:&nbsp;</div>
              <div className='font-mono'>г. Санкт-Петербург,</div>
              <div>ул. 6-я Красноармейская,</div>
              <div className='mb-2 font-mono'>д. 10, лит. А, ПОМЕЩ. 24</div>
            </div>

            <div className='mb-2 flex flex-wrap'>
              <div className='font-mono'>Почта &nbsp;</div>
              <div className='font-mono'>sales@tehnoprogress78.ru</div>
            </div>
            <div className='mb-2 flex flex-wrap justify-between '>
              <div className='font-mono'>Отдел продаж </div>
              <div className='font-mono'>&nbsp; 8-921-956-09-42</div>
            </div>
            <div className='mb-2 flex flex-wrap justify-between '>
              <div className='font-mono'>Директор &nbsp; &nbsp; </div>
              <div className=' font-mono'>&nbsp; 8-921-211-09-40</div>
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <h6 className=' mb-4 font-semibold uppercase'>Реквизиты</h6>
            <div className='flex  w-72 flex-wrap'>
              <div className='font-mono'>Банк: &nbsp;</div>
              <div className='font-mono'>Филиал "Северная столица" &nbsp;</div>
              <div className='mb-2 font-mono'>АО "Райфайзенбанк"</div>
            </div>
            <div className='mb-2 flex flex-wrap justify-between '>
              <div className='font-mono'>БИК банка&nbsp;</div>
              <div className=' font-mono'>044030723</div>
            </div>
            <div className='mb-2 flex flex-wrap'>
              <div className='font-mono'>ИНН &nbsp;</div>
              <div className='font-mono'>&nbsp;7801688448</div>
            </div>
            <div className='mb-2 flex flex-wrap justify-between '>
              <div className='font-mono'>КПП &nbsp;</div>
              <div className='font-mono'>&nbsp;783801001</div>
            </div>
            <div className='mb-2 flex flex-wrap justify-between '>
              <div className='font-mono'>ОГРН &nbsp;</div>
              <div className=' font-mono'>1207800126247</div>
            </div>
            <div className='mb-2 flex w-80 flex-wrap justify-between'>
              <div className='font-mono'>
                Расчетный счет &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </div>
              <div className=' font-mono'>40702810403000066173</div>
            </div>
            <div className='mb-2 flex w-80 flex-wrap justify-between'>
              <div className='font-mono'>Корреспондентский счет &nbsp;</div>
              <div className=' font-mono'>30101810100000000723</div>
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
