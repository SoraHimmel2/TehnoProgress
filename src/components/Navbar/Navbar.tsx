import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import NavbarList, { liProps } from '@/components/Navbar/NavbarList';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const listItemsArray: liProps[] = [
    {
      href: '/',
      text: 'Главная',
    },

    {
      href: '/products',
      text: 'Список продукции',
    },

    {
      href: '/#partnership',
      text: 'Партнеры',
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
          ? 'fixed z-[100] h-20 w-full shadow-xl duration-300 ease-in-out'
          : 'fixed z-[100] h-20 w-full'
      }
    >
      <div className='flex h-full w-full items-center justify-between px-2 md:justify-center 2xl:px-16'>
        <div className='visible md:invisible lg:visible'>
          <Link href='/'>
            <a>
              <img
                src='/images/logo-vq.png'
                className='absolute top-3 left-6 h-14'
              ></img>
            </a>
          </Link>
        </div>

        <div>
          <NavbarList
            linkColor={linkColor}
            ulClassName='hidden md:flex'
            liArray={listItemsArray}
            liClassName='ml-16 text-sm uppercase hover:border-b'
          ></NavbarList>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='px-4 md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {/* <div
        onClick={handleNav}
        className='absolute top-20 right-4 z-[80] h-20 w-20 cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 md:hidden'
      ></div> */}
      <div
        className={
          nav ? 'fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 h-screen w-[75%] bg-[#ecf0f3] p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]'
              : 'fixed left-[-100%] top-0 p-10 duration-500 ease-in'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <div>
                <img src='/images/logo-vq.png' className=' h-14'></img>
              </div>

              <div
                onClick={handleNav}
                className=' cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='my-4 border-b border-gray-300'></div>
          </div>
          <div className='flex flex-col py-4'>
            <NavbarList
              linkColor={linkColor}
              ulClassName='uppercase'
              liArray={listItemsArray}
              liClassName='py-4 text-sm'
            ></NavbarList>

            {/* <div className='pt-40'>
              <div className='my-4 flex w-full items-center justify-between sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/clint-briley-50056920a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/fireclint'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div> */}
            <div>
              {' '}
              <h6 className='mb-4 flex justify-start font-semibold uppercase md:justify-start'>
                Контакты
              </h6>
              <p className='mb-2 flex items-center justify-center md:justify-start'>
                <div className='flex-col'>
                  <div>Адрес :</div>
                  <div className='pl-2'>
                    г. Санкт-Петербург, ул. 6-я Красноармейская,
                  </div>
                  <div className='pl-2'>д. 10, лит. А, ПОМЕЩ. 24</div>
                  <div className=''>
                    <div>Почта: sales@tehnoprogress78.ru </div>
                    <div></div>
                  </div>

                  <div>
                    Отдел продаж :{' '}
                    <span className='inline'>8-921-956-09-42</span>
                  </div>
                  <div className='break-words'>Директор : 8-921-211-09-40</div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
