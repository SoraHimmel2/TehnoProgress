import ArrowLink from '@/components/links/ArrowLink';

const Requisites: React.FunctionComponent = () => {
  return (
    <div className='mb-4  flex  flex-col items-start rounded border border-primary-600 px-4 text-xl shadow-xl'>
      <div>
        <h6 className=' my-4 font-semibold uppercase'>Реквизиты</h6>

        <div className='mb-4 flex flex-col text-left'>
          <div>Наименование:</div>
          <div>ООО «ТехноПрогресс»</div>
        </div>
        <div className='mb-4 flex flex-row'>
          <div className='text-left'>
            <div className=''>ИНН/КПП: &nbsp;</div>
            <div className=''>7801688448/783801001</div>
          </div>
        </div>
        <div className='mb-4  flex flex-col text-left'>
          <div>Юридический адрес:</div>
          <div>
            190005, г. Санкт-Петербург, ул. 6-я Красноармейская, д. 10, лит. А,
            ПОМЕЩ. 24
          </div>
        </div>
        <div className='mb-4 flex flex-col text-left'>
          <div>Почтовый адрес:</div>
          <div>
            190005, г. Санкт-Петербург, ул. 6-я Красноармейская, д. 10, лит. А,
            ПОМЕЩ. 24
          </div>
        </div>

        <div className='mb-4 flex flex-row'>
          <div className='text-left'>
            <div className=''>Банк: &nbsp;</div>
            <div className=''>Филиал "Северная столица" &nbsp;</div>
            <div className=''>АО "Райфайзенбанк"</div>
          </div>
        </div>
        <div className='mb-4 flex flex-row'>
          <div className='text-left'>
            <div className=''>БИК банка:&nbsp;</div>
            <div className=' '>044030723</div>
          </div>
        </div>

        <div className='mb-4 flex flex-row'>
          <div className='text-left '>
            <div className=''>ОГРН: &nbsp;</div>
            <div className=' '>1207800126247</div>
          </div>
        </div>
        <div className='mb-4 flex flex-row'>
          <div className='text-left'>
            <div className=''>Расчетный счет: &nbsp;</div>
            <div className=' '>40702810403000066173</div>
          </div>
        </div>

        <div className='mb-4 flex flex-row'>
          <div className='text-left'>
            <div className=''>Корреспондентский счет: &nbsp;</div>
            <div className=' '>30101810100000000723</div>
          </div>
        </div>
        <div className='mb-4 flex flex-col text-left'>
          <div>Директор:</div>
          <div>Огурцов Андрей Сергеевич</div>
          <div>Действует на основании Устава</div>
        </div>

        <div className='mb-4'>
          <ArrowLink
            className='mt-2'
            download='Карточка предприятия.doc'
            href='requisites/Карточка предприятия.doc'
          >
            cкачать карточку предприятия
          </ArrowLink>
        </div>
      </div>
    </div>
  );
};

export default Requisites;
