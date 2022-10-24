import ButtonLink from '@/components/links/ButtonLink';

export interface ProductProps {
  imageSrc: string;
  title: string;
  description: string;
  pdfLink: string;
  buttonText: string;
}

const Product: React.FunctionComponent<ProductProps> = ({
  imageSrc,
  title,
  description,
  pdfLink,
  buttonText,
}) => {
  return (
    <div className='p-10 '>
      <div className=' overflow-hidden rounded shadow-lg '>
        <img className='w-full' src={imageSrc} alt='Mountain' />
        <div className='px-6 py-4'>
          <div className='mb-2 text-xl font-bold'>{title}</div>
          <p className='text-base text-gray-700'>{description}</p>
        </div>
        <div className=''>
          <ButtonLink
            className='flex items-stretch'
            isDarkBg={false}
            variant='outline'
            href={pdfLink}
          >
            {buttonText}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Product;
