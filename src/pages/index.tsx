import * as React from 'react';

import ImageWithText from '@/components/MainPage/ImageWithText';

import Seo from '@/components/Seo';

import SubmitForm from '@/components/Forms/SubmitForm';

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
  return (
    <div>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main className='grid-cols-1 justify-center gap-4'>
        <section className=''>
          <ImageWithText></ImageWithText>
        </section>

        {/* <section id='partnership'>
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
                      href='/certificates/Festo.jpg'
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
        </section> */}
        <section className=''></section>
        <h1 className='py-4 text-center'>Связаться с нами</h1>
        <div className='flex  justify-center '>
          <SubmitForm></SubmitForm>
        </div>
      </main>
    </div>
  );
}
