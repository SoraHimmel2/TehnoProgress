const ContactsInfo: React.FunctionComponent = () => {
  return (
    <div className='flex flex-col border-primary-900  text-2xl shadow-xl'>
      <div className='flex-col  p-4'>
        <div className='flex-col'>
          <div className=''>Отдел продаж: </div>
          <div className=''> 8-921-956-09-42</div>
        </div>
        <div className='flex-col'>
          <div className=''>Директор: &nbsp; &nbsp; &nbsp; &nbsp; </div>
          <div className=''> 8-921-211-09-40</div>
        </div>
        <div className='flex-col'>
          <div className=''>Почта: &nbsp;</div>
          <div className=''>sales@tehnoprogress78.ru</div>
        </div>
        <div className='flex-col '>
          <div className=''>Адрес: &nbsp;</div>
          <div>г. Санкт-Петербург,</div>
          <div>ул. 6-я Красноармейская,</div>
          <div className=''>д. 10, лит. А, ПОМЕЩ. 24</div>
        </div>
        <div className='flex-col '>
          <div className=''>&nbsp;</div>
          <div>&nbsp;</div>
          <div className=''>&nbsp;</div>
        </div>
        <div className='flex-col'>
          <div className=''>&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

export default ContactsInfo;
