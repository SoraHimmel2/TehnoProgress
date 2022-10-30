import ButtonLink from '@/components/links/ButtonLink';
import ArrowLink from '@/components/links/ArrowLink';
export interface ProductProps {
  imageSrc: string;
  title: string;
  description: string;
  pdfLink: string;
  buttonText: string;
  classProperty?: string;
}

const Product: React.FunctionComponent<ProductProps> = ({
  imageSrc,
  title,
  description,
  pdfLink,
  buttonText,
  classProperty = 'aspect-square w-full   object-contain p-7',
}) => {
  return (
    <div className='my-10 w-[70%] overflow-hidden  rounded border-primary-900 shadow-xl    md:w-[85%] lg:w-[80%] xl:w-[60%] '>
      <img className={classProperty} src={imageSrc} alt='Product image' />
      <div className='px-6 py-4'>
        <h3>{title}</h3>
        <div className='z-[100] text-base text-gray-700'>{description}</div>
        {/* <div className='flex-col'>
          <div>
            <ArrowLink
              direction='right'
              className='mt-2 '
              href='/certificates/Festo.jpg'
            >
              Перейти к
            </ArrowLink>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Product;
