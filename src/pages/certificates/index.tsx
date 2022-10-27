import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';

const Certificate: React.FunctionComponent = () => {
  const { query } = useRouter();
  const imageSrc = query.certificateName as string;

  return (
    <div className='flex justify-center'>
      <div className='mt-24 flex flex-col items-center gap-8 xl:container  xl:flex-row'>
        <div className='flex w-full  justify-center rounded   p-2 '>
          <img src='/images/Festo.jpg ' className='max-h-[720px]' alt='image' />
        </div>
        <div className='flex w-full   justify-center rounded  p-2 '>
          <img
            src='/images/Aignep.png '
            className='max-h-[720px]'
            alt='image'
          />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
