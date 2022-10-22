export interface PartnerProps {
  imageSrc: string;
  title: string;
  description: string;
  tagArray: string[];
}

const Partner: React.FunctionComponent<PartnerProps> = ({
  imageSrc,
  title,
  description,
  tagArray,
}) => {
  return (
    <div className='p-10 '>
      <div className=' overflow-hidden rounded shadow-lg '>
        <img className='w-full' src={imageSrc} alt='Mountain' />
        <div className='px-6 py-4'>
          <div className='mb-2 text-xl font-bold'>{title}</div>
          <p className='text-base text-gray-700'>{description}</p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          {tagArray.map((tag) => {
            return (
              <>
                <span className='mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'>
                  #{tag}
                </span>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partner;
