import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/Navbar/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='w-full flex-col'>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
}
