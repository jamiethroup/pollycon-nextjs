

import { ReactNode } from "react";
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Outfit, Cormorant } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant',
});

// Create a type for the children prop
type Props = {
  children: ReactNode;
};
 
const Layout = ({children}: Props) => {
  return (
    <>
    <div className={`${outfit.variable} ${cormorant.variable}`}>
      <Header/>
            <main>{children}</main>
      <Footer/>
    </div>
    </>
  );
};

export default Layout;
 