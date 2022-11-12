import ProductList from '@/components/Products/ProductList';
import { ProductProps } from '@/components/Products/Product';

const productClassTwoElements =
  '  flex flex-col self-stretch  w-[100%]   rounded border-primary-900 shadow-xl  sm:w-[85%]  md:w-[70%] lg:w-[55%] xl:w-[45%] ';
const productListClassTwoElements =
  'my-10  grid px-2 grid-cols-2 items-center justify-items-center gap-2 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-24 ';
const productClassFourElements =
  'w-[100%]   rounded border-primary-900 shadow-xl flex flex-col self-stretch sm:w-[85%]  md:w-[100%] lg:w-[95%] xl:w-[95%] ';
const productListClassFourElements =
  'my-10  grid px-2 grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-2  xl:gap-20 ';

const pneumatics: ProductProps[] = [
  {
    imageSrc: 'https://www.festo.com/media/fox/frontend/img/svg/logo_blue.svg',
    title: 'Festo',
    description:
      'пневмораспределители, пневмоцилиндры, фитинги, пневмошланги, датчики, пневмоострова, блоки подготовки воздуха, вакуумная техника',
    pdfLink:
      'https://drive.google.com/file/d/13C0MmDj_qg_w5nqWZnQPI1NWm6nBOHXt/view',
    buttonText: 'Перейти в каталог',
    imgClass:
      'aspect-square sm:aspect-video object-contain md:scale-100 w-full   p-7',
  },
  {
    imageSrc: 'images/products/smc.jpg',
    title: 'SMC',
    description:
      'пневмораспределители, пневмоцилиндры, фитинги, пневмошланги, датчики, пневмоострова, блоки подготовки воздуха, вакуумная техника',
    pdfLink:
      'https://drive.google.com/file/d/1Yg4yAEh3lSD7vnueGNHWIIn9Quy_Ubqu/view',
    buttonText: 'Перейти в каталог',
    imgClass:
      'aspect-square sm:aspect-video object-contain sm:scale-125 md:scale-150 w-full   p-7',
  },
  {
    imageSrc: 'images/products/aignep.png',
    title: 'Aignep',
    description:
      'пневмораспределители, пневмоцилиндры, фитинги, пневмошланги, датчики, блоки подготовки воздуха',
    pdfLink:
      'https://drive.google.com/file/d/17R2GHBqKj_BUqN35W8t9luZHJCVtBu5D/view',
    buttonText: 'Перейти в каталог',
    imgClass:
      'aspect-square sm:aspect-video object-contain md:scale-100 w-full   p-7',
  },
  {
    imageSrc: 'images/products/pneumatic.jpg',
    title: 'Другие',
    description: 'другие пневматические бренды',
    pdfLink:
      'https://drive.google.com/file/d/17R2GHBqKj_BUqN35W8t9luZHJCVtBu5D/view',
    buttonText: 'Перейти в каталог',
    imgClass:
      'aspect-square sm:aspect-video object-contain md:scale-100 w-full   p-7',
  },
];
const fittings: ProductProps[] = [
  {
    imageSrc: 'images/products/butterflyValve.jpg',
    title: 'Дисковые  затворы',
    description:
      'затворы дисковые поворотные, ручные или с приводом (пневматическим или электрическим) с разными материалами корпуса и уплотнения, под разные задачи всех направлений промышленности от пищевой до горнодобывающей',
    pdfLink:
      'https://drive.google.com/file/d/17R2GHBqKj_BUqN35W8t9luZHJCVtBu5D/view',
    buttonText: 'Перейти в каталог',
    imgClass:
      'aspect-square w-full overflow-hidden  scale-100 object-contain p-7',
  },
  {
    imageSrc: 'images/products/ballValve.jpg',
    title: 'Шаровые краны',
    description:
      'ручные или с приводом (пневматическим или электрическим) с разными материалами корпуса и уплотнения, под разные задачи всех направлений промышленности от пищевой до горнодобывающей',
    pdfLink:
      'https://drive.google.com/file/d/17R2GHBqKj_BUqN35W8t9luZHJCVtBu5D/view',
    buttonText: 'Перейти в каталог',
    imgClass: 'aspect-square w-full   object-contain p-7',
  },
  {
    imageSrc: 'images/products/segmentBallValve.png',
    title: 'Сегментные клапана',
    description:
      'клапана регулирующие  с приводом и позиционером. Осуществим расчет и подбор под Вашу задачу.',
    pdfLink:
      'https://drive.google.com/file/d/17R2GHBqKj_BUqN35W8t9luZHJCVtBu5D/view',
    buttonText: 'Перейти в каталог',
    imgClass: 'aspect-square w-full   object-contain p-7',
  },
  {
    imageSrc: 'images/products/globeValves.jpg',
    title: 'Седельные клапана',
    description:
      'седельные клапана  с разными материалами корпуса и уплотнения, под разные задачи',
    pdfLink:
      'https://drive.google.com/file/d/17R2GHBqKj_BUqN35W8t9luZHJCVtBu5D/view',
    buttonText: 'Перейти в каталог',
    imgClass: 'aspect-square w-full   object-contain p-7',
  },
  {
    imageSrc: 'images/products/gateValve.jpg',
    title: 'Шиберные задвижки',
    description:
      'шиберные задвижки (ножевые задвижки), ручные и под пневмопривод.',
    pdfLink:
      'https://drive.google.com/file/d/17R2GHBqKj_BUqN35W8t9luZHJCVtBu5D/view',
    buttonText: 'Перейти в каталог',
    imgClass: 'aspect-square w-full   object-contain p-7',
  },
  {
    imageSrc: 'images/products/solenoidValves.jpg',
    title: 'Электромагнитные клапана',
    description:
      'электромагниные клапана соленоидные клапана с электромагнитными катушками',
    pdfLink:
      'https://drive.google.com/file/d/17R2GHBqKj_BUqN35W8t9luZHJCVtBu5D/view',
    buttonText: 'Перейти в каталог',
    imgClass: 'aspect-square w-full   object-contain p-7',
  },
];
const bearings: ProductProps[] = [
  {
    imageSrc: 'images/products/skf.jpg',
    title: 'SKF',
    description: '',
    pdfLink:
      'https://drive.google.com/file/d/17R2GHBqKj_BUqN35W8t9luZHJCVtBu5D/view',
    buttonText: 'Перейти в каталог',
    imgClass: 'aspect-video w-full object-contain   p-7',
  },

  {
    imageSrc: 'images/products/ntn.jpg',
    title: 'NTN',
    description: '',

    imgClass: 'aspect-video w-full object-contain   p-7',
  },
  {
    imageSrc: 'images/products/fag.jpg',
    title: 'FAG',
    description: '',

    imgClass: 'aspect-video w-full object-contain   p-7',
  },
  {
    imageSrc: 'images/products/nsk.jpg',
    title: 'NSK',
    description: '',

    imgClass: 'aspect-video w-full object-contain   p-7',
  },
];
const conveyorComponents: ProductProps[] = [
  {
    imageSrc: 'images/products/rexnord.jpg',
    title: 'Rexnord',
    description: '',
    pdfLink:
      'https://drive.google.com/file/d/17R2GHBqKj_BUqN35W8t9luZHJCVtBu5D/view',
    buttonText: 'Перейти в каталог',
    imgClass: 'aspect-video w-full object-contain   p-7',
    productClass: productClassTwoElements + 'sm:justify-self-end',
  },

  {
    imageSrc: 'images/products/optibelt.jpg',
    title: 'Optibelt',
    description: '',
    imgClass: 'aspect-video w-full    p-7',
    productClass: productClassTwoElements + 'sm:justify-self-start',
  },
];
const hydraulics: ProductProps[] = [
  {
    imageSrc: 'images/products/duplomatic.jpg',
    title: 'Duplomatic',
    description: '',
    pdfLink:
      'https://drive.google.com/file/d/17R2GHBqKj_BUqN35W8t9luZHJCVtBu5D/view',
    buttonText: 'Перейти в каталог',
    imgClass:
      'aspect-square sm:aspect-video w-full sm:scale-125 object-contain   p-7',
    productClass: productClassTwoElements + 'sm:justify-self-end',
  },
  {
    imageSrc: 'images/products/hydraulics.jpg',
    title: 'Другие',
    description: '',
    pdfLink:
      'https://drive.google.com/file/d/17R2GHBqKj_BUqN35W8t9luZHJCVtBu5D/view',
    buttonText: 'Перейти в каталог',
    imgClass: 'aspect-square sm:aspect-video w-full   ',
    productClass: productClassTwoElements + 'sm:justify-self-start',
  },
];

const Products: React.FunctionComponent = () => {
  return (
    <div className='pt-24'>
      <h1 className='text-center'>Пневматика</h1>
      <ProductList
        productList={pneumatics}
        productListClass={productListClassFourElements}
        productClass={productClassFourElements}
      ></ProductList>
      <h1 className='text-center'>Арматура</h1>
      <ProductList
        productListClass=' px-2 grid grid-cols-2 items-center justify-items-center gap-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6'
        productList={fittings}
        productClass='my-10 w-[100%]  flex flex-col self-stretch rounded border-primary-900 shadow-xl  sm:w-[100%]  md:w-[100%] lg:w-[80%] xl:w-[100%] '
      ></ProductList>
      <h1 className='text-center'>Подшипники</h1>
      <ProductList
        productList={bearings}
        productListClass={productListClassFourElements}
        productClass={productClassFourElements}
      ></ProductList>
      <h1 className='text-center'>Конвейерное оборудование</h1>
      <ProductList
        productList={conveyorComponents}
        productListClass={productListClassTwoElements}
      ></ProductList>
      <h1 className='text-center'>Гидравлика</h1>
      <ProductList
        productList={hydraulics}
        productListClass={productListClassTwoElements}
      ></ProductList>
    </div>
  );
};

export default Products;
