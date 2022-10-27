import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';

const Certificate: React.FunctionComponent = () => {
  const { query } = useRouter();
  const imageSrc = query.certificateName as string;

  return (
    <div className='flex justify-center '>
      <img className='m-24' src={`/images/Festo.jpg`}></img>
      <img className='m-24' src={`/images/Aignep.png`}></img>
    </div>
  );
};

export default Certificate;
