import * as React from 'react';

import ImageWithText from '@/components/MainPage/ImageWithText';
import Navbar from '@/components/Navbar/Navbar';
import { ProductProps } from '@/components/Products/Product';
import ProductList from '@/components/Products/ProductList';
import Seo from '@/components/Seo';
import Partner from '@/components/Partnership/Partner';
import Link from 'next/link';
import ArrowLink from '@/components/links/ArrowLink';

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
  return (
    <div>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main className='grid-cols-1 justify-center gap-4'>
        <section className=''>
          <ImageWithText></ImageWithText>
        </section>
        <section>
          <h1 className='text-center'>Партнеры</h1>
          <div className='grid grid-cols-1 items-center gap-8  md:grid-cols-2 '>
            <div className='mx-10 my-8 overflow-hidden rounded border-primary-900  shadow-xl  xl:mx-36'>
              <img
                className='h-40 w-full p-7'
                src='https://www.festo.com/media/fox/frontend/img/svg/logo_blue.svg'
                alt='Festo'
              />
              <div className='px-6 py-4'>
                <div className='text-base text-gray-700'>
                  Далеко-далеко за словесными горами в стране гласных и
                  согласных живут, рыбные тексты. Силуэт текст вопроса точках
                  пунктуация переулка, речью маленький послушавшись свою
                  правилами которое переписывается решила коварный имени
                  текстами знаках, бросил живет?
                </div>
                <div className='flex-col'>
                  <div>
                    <ArrowLink
                      direction='right'
                      className='mt-2 '
                      href='/certificates/sertificate1.png'
                    >
                      Сертификат Festo
                    </ArrowLink>
                  </div>
                  <div>
                    <ArrowLink
                      direction='right'
                      className='mt-2 '
                      href='https://www.festo.com/us/en/#top'
                    >
                      Сайт Festo
                    </ArrowLink>
                  </div>
                </div>
              </div>
            </div>

            <div className='mx-10 my-8 overflow-hidden rounded border-primary-900  shadow-xl  xl:mx-36'>
              <img
                className='h-40 w-full p-2'
                src='/images/aignep.png'
                alt='Festo'
              />
              <div className='px-6 py-4'>
                <div className='text-base text-gray-700'>
                  Далеко-далеко за словесными горами в стране гласных и
                  согласных живут, рыбные тексты. Силуэт текст вопроса точках
                  пунктуация переулка, речью маленький послушавшись свою
                  правилами которое переписывается решила коварный имени
                  текстами знаках, бросил живет?
                </div>
                <div className='flex-col'>
                  <div>
                    <ArrowLink
                      direction='right'
                      className='mt-2 '
                      href='/certificates/sertificate2.png'
                    >
                      Сертификат Aignep
                    </ArrowLink>
                  </div>
                  <div>
                    <ArrowLink
                      direction='right'
                      className='mt-2 '
                      href='https://www.aignepusa.com/'
                    >
                      Сайт Aignep
                    </ArrowLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex'></div>
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
