import Partner, { PartnerProps } from '@/components/Partnership/Partner';

const PartnerList: React.FunctionComponent = () => {
  const partnerList: PartnerProps[] = [
    {
      imageSrc:
        'https://www.festo.com/media/fox/frontend/img/svg/logo_blue.svg',
    },
    { imageSrc: 'images/products/smc.jpg' },
    { imageSrc: 'images/products/aignep.png' },
    { imageSrc: 'images/products/skf.jpg' },
    { imageSrc: 'images/products/fag.jpg' },
    { imageSrc: 'images/products/nsk.jpg' },
    { imageSrc: 'images/products/ntn.jpg' },
    { imageSrc: 'images/products/optibelt.jpg' },
    { imageSrc: 'images/products/duplomatic.jpg' },
    { imageSrc: 'images/products/rexnord.jpg' },
  ];
  return (
    <div className='container grid grid-cols-1 items-center justify-items-center md:grid-cols-2 lg:grid-cols-5'>
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
