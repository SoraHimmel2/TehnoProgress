import Product, { ProductProps } from '@/components/Products/Product';
export interface PartnerListProps {
  productList: ProductProps[];
  productListClass?: string;
  productClass?: string;
}

const ProductList: React.FunctionComponent<PartnerListProps> = ({
  productList: partnerList,
  productListClass = 'grid grid-cols-1 items-center justify-items-center gap-0  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  productClass,
}) => {
  return (
    <div className={productListClass}>
      {partnerList.map((product) => {
        return (
          <Product
            key={product.imageSrc}
            imageSrc={product.imageSrc}
            title={product.title}
            description={product.description}
            pdfLink={product.pdfLink}
            buttonText={product.buttonText}
            imgClass={product.imgClass}
            productClass={productClass ?? product.productClass}
          ></Product>
        );
      })}
    </div>
  );
};

export default ProductList;
