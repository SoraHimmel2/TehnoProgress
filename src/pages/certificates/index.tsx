import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';

const Certificate: React.FunctionComponent = () => {
  const { query } = useRouter();
  const imageSrc = query.certificateName as string;

  return (
    <div className='flex flex-col justify-center'>
      <img className='mt-24' src={`/images/Festo.jpg`}></img>
      <img className='m-4' src={`/images/Aignep.png`}></img>
    </div>
  );
};

export default Certificate;
