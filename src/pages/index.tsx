import * as React from 'react';

import ImageWithText from '@/components/MainPage/ImageWithText';

import Seo from '@/components/Seo';

import About from '@/components/mainPage/About';
import PartnerList from '@/components/Partnership/PartnerList';

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
    <main className='flex justify-center'>
      <div className='container'>
        <section className='mt-24'>
          <ImageWithText></ImageWithText>
        </section>
        <section>
          <About></About>
        </section>
        <h1 className='p-6 text-center'>Мы сотрудничаем</h1>
        <section className='flex justify-center  text-gray-700 '>
          {/* <PartnerList></PartnerList> */}
          <img className='px-10' src='images/logos.png'></img>
        </section>
      </div>
    </main>
  );
}
