import * as React from 'react';

import ImageWithText from '@/components/MainPage/ImageWithText';
import Navbar from '@/components/Navbar/Navbar';
import { ProductProps } from '@/components/Products/Product';
import ProductList from '@/components/Products/ProductList';
import Seo from '@/components/Seo';
import TestPdf from '@/components/Pdf/TestPdf';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const partnerList: ProductProps[] = [
    {
      imageSrc: 'images/1.png',
      title: 'Название компании',
      description:
        'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Жаренные продолжил ее там лучше это, всемогущая до на берегу моей рекламных, путь своего вопроса, предупредила запятой взгляд использовало инициал рукописи.',
      pdfLink:
        'https://drive.google.com/file/d/13C0MmDj_qg_w5nqWZnQPI1NWm6nBOHXt/view',
      buttonText: 'Перейти в каталог',
    },
    {
      imageSrc: 'images/2.png',
      title: 'Название компании',
      description:
        'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Жаренные продолжил ее там лучше это, всемогущая до на берегу моей рекламных, путь своего вопроса, предупредила запятой взгляд использовало инициал рукописи.',
      pdfLink:
        'https://drive.google.com/file/d/1Yg4yAEh3lSD7vnueGNHWIIn9Quy_Ubqu/view',
      buttonText: 'Перейти в каталог',
    },
    {
      imageSrc: 'images/3.png',
      title: 'Название компании',
      description:
        'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Жаренные продолжил ее там лучше это, всемогущая до на берегу моей рекламных, путь своего вопроса, предупредила запятой взгляд использовало инициал рукописи.',
      pdfLink:
        'https://drive.google.com/file/d/17R2GHBqKj_BUqN35W8t9luZHJCVtBu5D/view',
      buttonText: 'Перейти в каталог',
    },
  ];
  return (
    <div>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main className='grid-cols-1 justify-center gap-4'>
        <Navbar></Navbar>

        <section className=''>
          <ImageWithText></ImageWithText>
          <div className='layout flex flex-col  items-center justify-center bg-fixed text-center'></div>
        </section>
        <section className=''></section>
        <div className='flex-col justify-center'>
          <h1 className='text-center'>Наши Товары</h1>
          <ProductList productList={partnerList}></ProductList>
        </div>
      </main>
    </div>
  );
}
