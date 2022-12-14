import ButtonLink from '@/components/links/ButtonLink';
import ArrowLink from '@/components/links/ArrowLink';
export interface ProductProps {
  imageSrc: string;
  title?: string;
  titleClass?: string;
  description: string;
  pdfLink?: string;
  buttonText?: string;
  imgClass?: string;
  productClass?: string;
}

const Product: React.FunctionComponent<ProductProps> = ({
  imageSrc,
  title,
  titleClass = 'break-words',
  description,
  pdfLink,
  buttonText,
  imgClass = 'aspect-square w-full   object-contain p-7',
  productClass = 'my-10 w-[70%]   rounded border-primary-900 shadow-xl    md:w-[85%] lg:w-[80%] xl:w-[80%] ',
}) => {
  return (
    <div className={productClass}>
      <img className={imgClass} src={imageSrc} alt='Product image' />
      <div className='px-6 pb-4'>
        <h3 className={titleClass}>{title}</h3>
        <div className='z-[80]   text-gray-700 xl:text-xl'>{description}</div>
      </div>
    </div>
  );
};

export default Product;
