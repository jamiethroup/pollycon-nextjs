import React, { ReactNode, useEffect } from "react";
import { useRouter } from 'next/router';
import sal from 'sal.js';
import { DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import ScrollClassAdder from '@/components/scrollclassadder';
import Script from 'next/script';

const dmsans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_sans',
})

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();

  useEffect(() => {
    sal();
  }, []);

  const pageId = pathname === "/" ? "index" : pathname.replace('/', '');

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-8WZ6P6V99R" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8WZ6P6V99R');
        `}
      </Script>
      <div id={pageId} className={`${dmsans.variable} font-dm_sans ${pathname.length === 1 ? 'index' : pathname.replace('/', '')}`}>
        <main className="grid relative lg:grid-cols-2 min-h-screen">{children}</main>
        <Analytics />
        <ScrollClassAdder />
      </div>
    </>
  );
};

export default Layout;