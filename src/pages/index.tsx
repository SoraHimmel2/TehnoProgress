import * as React from 'react';

import ImageWithText from '@/components/MainPage/ImageWithText';
import PartnerList from '@/components/Partnership/PartnerList';

import Seo from '@/components/Seo';

import About from '@/components/mainPage/About';
import Head from 'next/head';

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
      <Head>
        <title>ТехноПрогресс</title>
        <link rel='canonical' href='https://tehnoprogress-russia.ru' />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org/",  
              "@type": "Organization",
              "name": "ООО "ТехноПрогресс"",
              "alternateName": "ТехноПрогресс Россия",
              "url": "https://tehnoprogress-russia.ru",
              "logo": "https://tehnoprogress-russia.ru/favicon.ico",
              "itemListElement": [{
                "@type": "ListItem", 
                "position": 1, 
                "name": "Продукция: Festo, другие",
                "item": "https://tehnoprogress-russia.ru/products"  
              },{
                "@type": "ListItem", 
                "position": 2, 
                "name": "Контакты",
                "item": "https://tehnoprogress-russia.ru/contacts"  
              },{
                "@type": "ListItem", 
                "position": 3, 
                "name": "Обратная Связь",
                "item": "https://tehnoprogress-russia.ru/feedback"  
              }],
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "8-921-956-09-42",
                "contactType": "customer service",
                "areaServed": "RU",
                "availableLanguage": "Russian"
              },{
                "@type": "ContactPoint",
                "telephone": "8-921-936-90-03",
                "contactType": "customer service",
                "areaServed": "RU",
                "availableLanguage": "Russian"
              }]
            }
              `,
          }}
        />
        <meta
          name='keywords'
          content='Технопрогресс, фесто, festo, пневматика, пневмоавтоматика, автоматика'
        ></meta>
      </Head>
      <main className='flex justify-center'>
        <div className='container'>
          <section className='mt-24'>
            <ImageWithText></ImageWithText>
          </section>
          <section>
            <About></About>
          </section>
          <h1 className='mb-6 text-center'>Мы сотрудничаем</h1>
          <section className='flex justify-center  text-gray-700 '>
            {/* <PartnerList></PartnerList> */}
            <img className='px-4' src='images/logos.png'></img>
          </section>
        </div>
      </main>
    </div>
  );
}
