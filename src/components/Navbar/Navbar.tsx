import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

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
      href: '/about',
      text: 'Список продукции',
    },
    {
      href: '/skills',
      text: 'Контакты',
    },
    {
      href: '/skills',
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
      <div className='flex h-full w-full items-center justify-center px-2 2xl:px-16'>
        <Link href='/'>
          <a></a>
        </Link>
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
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
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
              <Link href='/'>
                <a></a>
              </Link>
              <div
                onClick={handleNav}
                className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400'
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

            <div className='pt-40'>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
