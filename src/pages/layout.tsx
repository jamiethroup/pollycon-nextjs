

import { ReactNode, useEffect } from "react";
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Cormorant_Infant, Outfit } from 'next/font/google';
import { useRouter } from 'next/router';
import sal from 'sal.js'

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
 
const Layout = ({children}: Props) => {
  const { pathname } = useRouter();
  sal();
  useEffect( () => {
    // Variables
    const footer = document.querySelector('footer')!;
    // Below is the code to toggle dark mode// On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
    const handler = (entries: { isIntersecting: any; }[]) => {
      (!entries[0].isIntersecting) ? null : document.documentElement.classList.add('dark');
    }
    const observer = new window.IntersectionObserver(handler)
    observer.observe(footer)
  }, [] );
  return (
    <>
    <div id={pathname.length == 1 ? 'index' : pathname.replace('/', '')} className={`${outfit.variable} ${cormorant.variable}`}>
      <Header/>
            <main>{children}</main>
      <Footer/> 
    </div>
    </>
  );
};

export default Layout;
 