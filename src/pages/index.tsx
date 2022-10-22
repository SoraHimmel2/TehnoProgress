import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ImageWithText from '@/components/MainPage/ImageWithText';
import Navbar from '@/components/Navbar/Navbar';
import Seo from '@/components/Seo';

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
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <Navbar></Navbar>

        <section className=''>
          <ImageWithText></ImageWithText>
          <div className='layout flex flex-col  items-center justify-center bg-fixed text-center'>
            <div>Название Компании</div>
          </div>
        </section>
        <section className=''>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed placeat
          qui eaque quibusdam porro unde, fugiat obcaecati nostrum aliquid ipsum
          voluptates sunt assumenda natus eos iure ad dolorem. Sapiente, sit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          aliquid molestias provident reiciendis numquam quaerat! Voluptatibus
          magni quibusdam earum consequuntur assumenda eaque quaerat distinctio
          minus atque quasi? Accusamus, illum? Perferendis?
        </section>
      </main>
    </Layout>
  );
}
