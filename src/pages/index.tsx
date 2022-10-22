import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ImageWithText from '@/components/MainPage/ImageWithText';
import Navbar from '@/components/Navbar/Navbar';
import { PartnerProps } from '@/components/Partnership/Partner';
import PartnerList from '@/components/Partnership/PartnerList';
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
  const partnerList: PartnerProps[] = [
    {
      imageSrc:
        'https://thumbs.dreamstime.com/z/metal-gears-close-up-various-spare-parts-disassembled-engine-37748284.jpg',
      title: 'Название компании',
      description:
        'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Жаренные продолжил ее там лучше это, всемогущая до на берегу моей рекламных, путь своего вопроса, предупредила запятой взгляд использовало инициал рукописи.',
      tagArray: ['тег1', 'тег2', 'тег3'],
    },
    {
      imageSrc:
        'https://thumbs.dreamstime.com/z/internal-device-multi-section-water-pump-many-turbine-wheels-located-same-axis-internal-device-multi-section-146885917.jpg',
      title: 'Название компании',
      description:
        'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Жаренные продолжил ее там лучше это, всемогущая до на берегу моей рекламных, путь своего вопроса, предупредила запятой взгляд использовало инициал рукописи.',
      tagArray: ['тег1', 'тег2', 'тег3'],
    },
    {
      imageSrc:
        'https://thumbs.dreamstime.com/z/inside-simple-water-pump-mechanical-which-required-all-motor-vehicles-engine-cooling-systems-blades-will-rotate-55031448.jpg',
      title: 'Название компании',
      description:
        'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Жаренные продолжил ее там лучше это, всемогущая до на берегу моей рекламных, путь своего вопроса, предупредила запятой взгляд использовало инициал рукописи.',
      tagArray: ['тег1', 'тег2', 'тег3'],
    },
    {
      imageSrc:
        'https://thumbs.dreamstime.com/z/internal-device-multi-section-water-pump-many-turbine-wheels-located-same-axis-internal-device-multi-section-146192954.jpg',
      title: 'Название компании',
      description:
        'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Жаренные продолжил ее там лучше это, всемогущая до на берегу моей рекламных, путь своего вопроса, предупредила запятой взгляд использовало инициал рукописи.',
      tagArray: ['тег1', 'тег2', 'тег3'],
    },
    {
      imageSrc:
        'https://thumbs.dreamstime.com/z/internal-device-multi-section-water-pump-many-turbine-wheels-located-same-axis-internal-device-multi-section-146885917.jpg',
      title: 'Название компании',
      description:
        'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Жаренные продолжил ее там лучше это, всемогущая до на берегу моей рекламных, путь своего вопроса, предупредила запятой взгляд использовало инициал рукописи.',
      tagArray: ['тег1', 'тег2', 'тег3'],
    },
    {
      imageSrc:
        'https://thumbs.dreamstime.com/z/internal-device-multi-section-water-pump-many-turbine-wheels-located-same-axis-internal-device-multi-section-146192954.jpg',
      title: 'Название компании',
      description:
        'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Жаренные продолжил ее там лучше это, всемогущая до на берегу моей рекламных, путь своего вопроса, предупредила запятой взгляд использовало инициал рукописи.',
      tagArray: ['тег1', 'тег2', 'тег3'],
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
          <h1 className='text-center'>Наши Партнеры</h1>
          <PartnerList partnerList={partnerList}></PartnerList>
        </div>
      </main>
    </div>
  );
}
