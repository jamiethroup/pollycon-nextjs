import React, { ReactNode, useEffect } from "react";
import { useRouter } from 'next/router';
import sal from 'sal.js';
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Cormorant_Infant, Outfit } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import ScrollClassAdder from '@/components/scrollclassadder'; // Adjust the import path if needed

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const cormorant = Cormorant_Infant({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: "300"
});
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
      <div id={pageId} className={`${outfit.variable} ${pathname.length === 1 ? 'index' : pathname.replace('/', '')}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <ScrollClassAdder />
      </div>
    </>
  );
};

export default Layout;