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
          ? 'fixed top-0 z-[100] h-20 w-full shadow-xl duration-300 ease-in-out'
          : 'fixed top-0 z-[100] h-20 w-full'
      }
    >
      <div className='flex h-full w-full items-center justify-between px-2 md:justify-center 2xl:px-16'>
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
        <div className='visible md:invisible lg:visible'>
          <Link href='/'>
            <a>
              <img src='/images/logo-vq.png' className=' mr-5 h-14'></img>
            </a>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'absolute top-10 right-6 z-[60] flex h-14 w-14 cursor-pointer items-center  justify-center  border-none bg-none p-3  md:hidden'
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
                <img src='/images/logo-vq.png' className=' h-14 '></img>
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
            <div className='mt-16'>
              {' '}
              <h6 className='mb-4 flex justify-start font-semibold uppercase md:justify-start'>
                Контакты
              </h6>
              <p className='mb-2 flex items-center justify-center md:justify-start'>
                <div className='flex-col '>
                  <div className='font-mono'>Адрес :&nbsp;</div>
                  <div className='font-mono'>
                    г. Санкт-Петербург, ул. 6-я Красноармейская,
                  </div>
                  <div className='mb-2 font-mono'>д. 10, лит. А, ПОМЕЩ. 24</div>
                  <div className='mb-2 flex flex-wrap'>
                    <div className='font-mono'>Почта : &nbsp;</div>
                    <div className='font-mono'>sales@tehnoprogress78.ru</div>
                  </div>
                  <div className='w-36 border-black sm:w-44'>
                    <div className='flex flex-row flex-wrap justify-between '>
                      <div className=' font-mono'>Отдел продаж : &nbsp;</div>
                      <div className=' font-mono'>8-921-956-09-42</div>
                    </div>
                    <div className='flex flex-row flex-wrap justify-between align-text-bottom'>
                      <div className='w-36  font-mono'>Директор : &nbsp;</div>
                      <div className='  font-mono'>8-921-211-09-40</div>
                    </div>
                  </div>

                  {/* <div className='flex flex-col justify-center'>
                    <div className='w-70 flex flex-row border-2 border-black'>
                      <div className=''>Отдел продаж : &nbsp;</div>
                      <div className=''>8-921-956-09-42</div>
                    </div>
                    <div className='w-28 justify-center border-2 border-black'>
                      <div className=''>Директор : &nbsp;</div>
                      <div className=''>8-921-211-09-40</div>
                    </div>
                  </div> */}
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
