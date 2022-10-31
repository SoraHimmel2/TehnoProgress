import * as React from 'react';
import ArrowLink from '@/components/links/ArrowLink';
import ImageWithText from '@/components/MainPage/ImageWithText';

import Seo from '@/components/Seo';

import SubmitForm from '@/components/Forms/SubmitForm';
import About from '@/components/mainPage/About';

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
        <section className='mt-24'>
          <ImageWithText></ImageWithText>
        </section>
        <section>
          <About></About>
        </section>

        <section className=''>
          <div>
            <h1 className='text-center'>Мы сотрудничаем</h1>
          </div>
        </section>
      </main>
    </div>
  );
}
