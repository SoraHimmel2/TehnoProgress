import Link from 'next/link';
const Footer: React.FunctionComponent = () => {
  return (
    <footer className='bg-white text-center text-gray-600 shadow-lg lg:text-left'>
      <div className='flex items-center justify-center border-b border-gray-300 p-6 lg:justify-between'></div>
      <div className='mx-6 py-10 text-left '>
        <div className='flex flex-col justify-center gap-10 sm:grid sm:grid-cols-1 md:flex md:flex-row '>
          <div className=' border-black '>
            <h6
              className='
              mb-4
              flex
              flex-col 
              items-start
            '
            ></h6>
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
                <a className=''>Aignep</a>
              </Link>
            </div>
          </div> */}

          <div className='flex flex-col items-start  border-black'>
            <img src='/images/logo-vq.png' className='w-72 md:w-60'></img>
            <h6 className=' mb-4 font-semibold uppercase'>Контакты</h6>
            <div className='w-60 flex-col flex-wrap '>
              <div className=''>Адрес:&nbsp;</div>
              <div className=''>г. Санкт-Петербург,</div>
              <div>ул. 6-я Красноармейская,</div>
              <div className='mb-2 '>д. 10, лит. А, ПОМЕЩ. 24</div>
            </div>

            <div className='mb-2 flex-col flex-wrap '>
              <div className=''>Почта: &nbsp;</div>
              <div className=''>sales@tehnoprogress78.ru</div>
            </div>
            <div className='mb-2 flex-col flex-wrap  '>
              <div className=''>Отдел продаж: </div>
              <div className=''> 8-921-956-09-42</div>
            </div>
            <div className='mb-2 flex-col flex-wrap  '>
              <div className=''>Директор: &nbsp; &nbsp; </div>
              <div className=' '> 8-921-211-09-40</div>
            </div>
          </div>

          <div className=' flex-col border-black  sm:mt-12 lg:flex-none'>
            <h6 className='mb-4 pr-36 text-left font-semibold uppercase lg:text-center'>
              Реквизиты
            </h6>
            <div className='flex flex-col items-start gap-2 sm:gap-8 lg:flex-row'>
              <div>
                <div className='flex-col  flex-wrap '>
                  <div className=''>Банк: &nbsp;</div>
                  <div className='mb-2'>Филиал &nbsp;</div>
                  <div className='mb-2 '>"Северная столица"</div>
                  <div className='mb-2 '>АО "Райфайзенбанк"</div>
                </div>
                <div className=' flex-col flex-wrap  '>
                  <div className=''>БИК банка:&nbsp;</div>
                  <div className='mb-2 '>044030723</div>
                </div>
                <div className='mb-2 flex-col flex-wrap '>
                  <div className=''>ИНН: &nbsp;</div>
                  <div className=''>7801688448</div>
                </div>
                <div className='mb-2 flex-col flex-wrap  '>
                  <div className=''>ОГРН: &nbsp;</div>
                  <div className=' '>1207800126247</div>
                </div>
              </div>

              <div>
                <div className='mb-2 w-80 flex-col flex-wrap '>
                  <div className=''>
                    Расчетный счет: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </div>
                  <div className=' '>40702810403000066173</div>
                </div>
                <div className='mb-2 flex w-80 flex-col flex-wrap '>
                  <div className=''>Корреспондентский счет: &nbsp;</div>
                  <div className=' '>30101810100000000723</div>
                </div>
                <div className='mb-2 flex-col flex-wrap  '>
                  <div className=''>КПП: &nbsp;</div>
                  <div className=''>&nbsp;783801001</div>
                </div>
              </div>
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
