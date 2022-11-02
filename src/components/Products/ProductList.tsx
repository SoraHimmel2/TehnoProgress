import Product, { ProductProps } from '@/components/Products/Product';
export interface PartnerListProps {
  productList: ProductProps[];
}

const ProductList: React.FunctionComponent<PartnerListProps> = ({
  productList: partnerList,
}) => {
  return (
    <div className='grid grid-cols-1 items-center justify-items-center gap-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {partnerList.map((product) => {
        return (
          <Product
            key={product.imageSrc}
            imageSrc={product.imageSrc}
            title={product.title}
            description={product.description}
            pdfLink={product.pdfLink}
            buttonText={product.buttonText}
            classProperty={product.classProperty}
          ></Product>
        );
      })}
    </div>
  );
};

export default ProductList;
