const Requisites: React.FunctionComponent = () => {
  return (
    <div className=''>
      <div className='flex  w-72 flex-wrap'>
        <div className='font-mono'>Банк: &nbsp;</div>
        <div className='font-mono'>Филиал "Северная столица" &nbsp;</div>
        <div className='mb-2 font-mono'>АО "Райфайзенбанк"</div>
      </div>
      <div className='mb-2 flex flex-wrap  '>
        <div className='font-mono'>БИК банка&nbsp;</div>
        <div className=' font-mono'>044030723</div>
      </div>
      <div className='mb-2 flex flex-wrap'>
        <div className='font-mono'>ИНН &nbsp;</div>
        <div className='font-mono'>&nbsp;7801688448</div>
      </div>
      <div className='mb-2 flex flex-wrap  '>
        <div className='font-mono'>КПП &nbsp;</div>
        <div className='font-mono'>&nbsp;783801001</div>
      </div>
      <div className='mb-2 flex flex-wrap  '>
        <div className='font-mono'>ОГРН &nbsp;</div>
        <div className=' font-mono'>1207800126247</div>
      </div>
      <div className='mb-2 flex w-80 flex-wrap '>
        <div className='font-mono'>
          Расчетный счет &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
        <div className=' font-mono'>40702810403000066173</div>
      </div>
      <div className='mb-2 flex w-80 flex-wrap '>
        <div className='font-mono'>Корреспондентский счет &nbsp;</div>
        <div className=' font-mono'>30101810100000000723</div>
      </div>
    </div>
  );
};

export default Requisites;
