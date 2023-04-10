

import { ReactNode, useEffect } from "react";
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
  useEffect( () => {
    // Variables
    const footer = document.querySelector('footer')
    // Below is the code to toggle dark mode
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    const handler = (entries) => {
      (!entries[0].isIntersecting) ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
    }
    const observer = new window.IntersectionObserver(handler)
    observer.observe(footer,{rootMargin: '0px 0px 200px 0px'})
  }, [] );
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
 