import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import NavbarList, { liProps } from '@/components/Navbar/NavbarList';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');

  const listItemsArray: liProps[] = [
    {
      href: '/',
      text: 'Главная',
    },

    {
      href: '/products',
      text: 'Продукция',
    },
    {
      href: '',
      text: 'Скачать',
    },
    {
      href: '/contacts',
      text: 'Контакты',
    },
    {
      href: '/feedback',
      text: 'Обратная связь',
    },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed top-0 z-[80] h-20 w-full shadow-xl duration-300 ease-in-out '
          : 'fixed top-0 z-[80] h-20 w-full'
      }
    >
      <div className='flex h-full w-full items-center  justify-between px-2 lg:flex-row-reverse   2xl:px-16'>
        <div className='flex lg:flex-1 2xl:ml-40'>
          <div className='   border-black'>
            <NavbarList
              ulClassName='hidden lg:flex'
              liArray={listItemsArray}
              liClassName=' lg:mx-5 xl:mx-8 text-xl font-bold uppercase border-b border-transparent hover:border-b hover:border-gray-400 '
            ></NavbarList>

            <div onClick={handleNav} className='px-4 lg:hidden'>
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        <div className='visible   border-black xl:visible'>
          <Link href='/'>
            <a>
              <img
                src='/images/logo-vq.png'
                className=' h-14  border-red-500   lg:mx-14  xl:mx-24 '
              ></img>
            </a>
          </Link>
        </div>
        <div className='invisible  border-black lg:hidden'>
          <NavbarList
            ulClassName='hidden lg:flex '
            liArray={listItemsArray}
            liClassName='mx-8 text-lg font-bold uppercase hover:border-b '
          ></NavbarList>

          <div onClick={handleNav} className='px-4 lg:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        onClick={handleNav}
        className={
          nav
            ? 'absolute top-10 right-6 z-[60] flex h-14 w-14 cursor-pointer items-center  justify-center  border-none bg-none p-3  lg:hidden'
            : 'hidden'
        }
      >
        <AiOutlineClose
          color='white'
          enableBackground={1}
          className='h-12 w-12 '
        />
      </div>
      <div
        onClick={handleNav}
        className={
          nav ? 'fixed left-0 top-0 h-screen w-full bg-black/70 lg:hidden' : ''
        }
      >
        <div
          className={
            nav
              ? ' fixed left-0 top-0 h-screen w-[75%] bg-[#ecf0f3] p-10 duration-500 ease-in sm:w-[60%] md:w-[45%] '
              : 'invisible fixed left-[-100%] top-0 p-10 duration-500 ease-in'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <img
                    src='/images/logo-vq.png'
                    className=' h-14  border-red-500   lg:mx-20  xl:mx-24 '
                  ></img>
                </a>
              </Link>
            </div>
            <div className='my-4 border-b border-gray-300'></div>
          </div>
          <div className='flex flex-col py-4'>
            <NavbarList
              ulClassName='uppercase'
              liArray={listItemsArray}
              liClassName='py-3 text-sm'
            ></NavbarList>
            <div className='my-4 border-b border-gray-300'></div>
            <div className='mt-4'>
              <h6 className='mb-4 flex justify-start font-semibold uppercase md:justify-start'>
                Контакты
              </h6>
              <div className='mb-2 flex items-center justify-center md:justify-start'>
                <div className='flex-col '>
                  <div className=''>Адрес :&nbsp;</div>
                  <div className=''>
                    г. Санкт-Петербург, ул. 6-я Красноармейская,
                  </div>
                  <div className='mb-2 '>д. 10, лит. А, ПОМЕЩ. 24</div>
                  <div className='mb-2 flex flex-col flex-wrap '>
                    <div className=''>Почта &nbsp;</div>
                    <div className=''>sales@tehnoprogress78.ru</div>
                  </div>
                  <div className='w-36 border-black '>
                    <div className='flex flex-row flex-wrap justify-between '>
                      <div className=''>Отдел продаж &nbsp;</div>
                      <div className=''>8-921-956-09-42</div>
                    </div>
                    <div className='flex flex-row flex-wrap justify-between align-text-bottom'>
                      <div className='w-36  '>Директор &nbsp;</div>
                      <div className=''>8-921-211-09-40</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
