const Requisites: React.FunctionComponent = () => {
  return (
    <div className='my-8  grid  auto-cols-max  grid-cols-2 gap-4  md:gap-40 lg:w-4/5'>
      <div className='flex flex-col  shadow-xl  md:border-primary-900'>
        <div className='flex-col px-4'>
          <div className='flex flex-wrap'>
            <div className=''>ОГРН: </div>
            <div>&nbsp; 1207800126247</div>
          </div>
          <div className='flex flex-wrap'>
            <div className=''>Корреспондентский счет: </div>
            <div>&nbsp; 30101810100000000723</div>
          </div>
          <div className='flex flex-wrap'>
            <div className=''> Расчетный счет: </div>
            <div>&nbsp; 40702810403000066173</div>
          </div>
          <div className='flex flex-wrap'>
            <div className=''>ИНН : </div>
            <div>&nbsp; 7801688448</div>
          </div>
          <div className='flex flex-wrap'>
            <div className=''>КПП : </div>
            <div>&nbsp; 783801001</div>
          </div>
        </div>
      </div>
      <div className=' flex flex-col  border-primary-900  shadow-xl'>
        <div className='flex-col px-4'>
          <div className='flex flex-wrap'>
            <div className=''>Банк: &nbsp; </div>
            <div>&nbsp; Филиал "Северная столица"</div>
            <div className=''>&nbsp; АО "Райфайзенбанк"</div>
          </div>
        </div>
        <div className='flex-col px-4'>
          <div className='flex  items-center'>
            <div className=''>БИК банка:&nbsp; </div>
            <div>&nbsp; 044030723</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requisites;
