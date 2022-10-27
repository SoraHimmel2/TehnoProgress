const ContactsInfo: React.FunctionComponent = () => {
  return (
    <div>
      {' '}
      <div className=''>
        <div className=''>
          <div className=''>
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
