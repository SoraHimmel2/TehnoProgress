import ProductList from '@/components/Products/ProductList';
import { ProductProps } from '@/components/Products/Product';
const productList: ProductProps[] = [
  {
    imageSrc: 'images/1.png',
    title: 'Название каталога',
    description:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Жаренные продолжил ее там лучше это, всемогущая до на берегу моей рекламных, путь своего вопроса, предупредила запятой взгляд использовало инициал рукописи.',
    pdfLink:
      'https://drive.google.com/file/d/13C0MmDj_qg_w5nqWZnQPI1NWm6nBOHXt/view',
    buttonText: 'Перейти в каталог',
  },
  {
    imageSrc: 'images/2.png',
    title: 'Название каталога',
    description:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Жаренные продолжил ее там лучше это, всемогущая до на берегу моей рекламных, путь своего вопроса, предупредила запятой взгляд использовало инициал рукописи.',
    pdfLink:
      'https://drive.google.com/file/d/1Yg4yAEh3lSD7vnueGNHWIIn9Quy_Ubqu/view',
    buttonText: 'Перейти в каталог',
  },
  {
    imageSrc: 'images/3.png',
    title: 'Название каталога',
    description:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Жаренные продолжил ее там лучше это, всемогущая до на берегу моей рекламных, путь своего вопроса, предупредила запятой взгляд использовало инициал рукописи.',
    pdfLink:
      'https://drive.google.com/file/d/17R2GHBqKj_BUqN35W8t9luZHJCVtBu5D/view',
    buttonText: 'Перейти в каталог',
  },
];

const Products: React.FunctionComponent = () => {
  return (
    <div className='pt-24'>
      <ProductList productList={productList}></ProductList>
    </div>
  );
};

export default Products;
