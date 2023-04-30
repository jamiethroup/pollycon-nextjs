

import { ReactNode, useEffect } from "react";
import Header from '@/components/header'
import Footer from '@/components/footer'
import { EB_Garamond, Outfit } from 'next/font/google';


// Linklist
const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Words",
    path: "/words",
  },
  {
    label: "Work",
    path: "/work",
  },
]

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const cormorant = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-ebgaramond',
});

// Create a type for the children prop
type Props = {
  children: ReactNode;
};
 
const Layout = ({children}: Props) => {
  useEffect( () => {
    // Variables
    const footer = document.querySelector('footer')!;
    // Below is the code to toggle dark mode
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    const handler = (entries: { isIntersecting: any; }[]) => {
      (!entries[0].isIntersecting) ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
    }
    const observer = new window.IntersectionObserver(handler)
    observer.observe(footer)
  }, [] );
  return (
    <>
    <div className={`${outfit.variable} ${cormorant.variable}`}>
      <Header linklist={links}/>
            <main>{children}</main>
      <Footer linklist={links}/>
    </div>
    </>
  );
};

export default Layout;
 