import React, { ReactNode, useEffect } from "react";
import { useRouter } from 'next/router';
import sal from 'sal.js';
import Header from '@/components/header';
import Jobs from '@/components/jobs';
import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import ScrollClassAdder from '@/components/scrollclassadder'; // Adjust the import path if needed


const dmsans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_sans',
})

// Create a type for the children prop
type Props = {
  children: ReactNode;
};

// Intersection Observer setup (define it outside the component)
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();

  useEffect(() => {
    sal();
  }, []);

  const pageId = pathname === "/" ? "index" : pathname.replace('/', '');

  return (
    <>
      <div id={pageId} className={`${dmsans.variable} ${pathname.length === 1 ? 'index' : pathname.replace('/', '')}`}>
        <main className="grid relative lg:grid-cols-2 min-h-screen">{children}</main>
        <Analytics />
        <ScrollClassAdder />
      </div>
    </>
  );
};

export default Layout;