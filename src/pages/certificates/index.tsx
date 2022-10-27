import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';

const Certificate: React.FunctionComponent = () => {
  const { query } = useRouter();
  const imageSrc = query.certificateName as string;

  return (
    <div className='mt-24 flex flex-col justify-center gap-8 md:flex-row'>
      <img className='mb-4' src={`/images/Festo.jpg`}></img>
      <img className='m-4' src={`/images/Aignep.png`}></img>
    </div>
  );
};

export default Certificate;
