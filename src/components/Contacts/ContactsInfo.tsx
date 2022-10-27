const ContactsInfo: React.FunctionComponent = () => {
  return (
    <div>
      {' '}
      <div className='mx-6 py-10 text-center md:text-left'>
        <div className='flex flex-col justify-center gap-10 sm:grid sm:grid-cols-2 lg:flex lg:flex-row'>
          <div className='flex flex-col items-start'>
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
        </div>
      </div>
    </div>
  );
};

export default ContactsInfo;
