import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='w-full flex-col'>
      <Head>
        <title>Технопрогресс</title>
      </Head>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
}
