import Partner, { PartnerProps } from '@/components/Partnership/Partner';

const PartnerList: React.FunctionComponent = () => {
  const partnerList: PartnerProps[] = [
    {
      imageSrc:
        'https://www.festo.com/media/fox/frontend/img/svg/logo_blue.svg',
    },
    { imageSrc: 'images/products/aignep.png' },
    { imageSrc: 'images/products/smc.jpg' },
    { imageSrc: 'images/products/skf.jpg' },
    { imageSrc: 'images/products/rexnord.jpg' },
    { imageSrc: 'images/products/duplomatic.jpg' },
  ];
  return (
    <div className='container grid grid-cols-1 items-center justify-items-center md:grid-cols-2 lg:grid-cols-3'>
      {partnerList.map((product) => {
        return (
          <Partner
            key={product.imageSrc}
            imageSrc={product.imageSrc}
            title={product.title}
            description={product.description}
            buttonText={product.buttonText}
            classProperty={product.classProperty}
          ></Partner>
        );
      })}
    </div>
  );
};

export default PartnerList;
