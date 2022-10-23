export interface PartnerProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Partner: React.FunctionComponent<PartnerProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className='p-10 '>
      <div className=' overflow-hidden rounded shadow-lg '>
        <img className='w-full' src={imageSrc} alt='Mountain' />
        <div className='px-6 py-4'>
          <div className='mb-2 text-xl font-bold'>{title}</div>
          <p className='text-base text-gray-700'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Partner;
