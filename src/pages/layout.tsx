/* eslint-disable max-len */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import {useEffect} from 'react';
const Layout = ({children}) => {
  useEffect( () => {
    // Variables
    const footer = document.querySelector('footer')
    // Below is the code to toggle dark mode
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    const handler = (entries) => {
      (!entries[0].isIntersecting) ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
    }
    const observer = new window.IntersectionObserver(handler)
    // observer.observe(footer)
  }, [] );
  return (
    <>
      <div>
        JAMIE
        <main>{children}</main>
        ASD
      </div>
    </>
  );
};

export default Layout;
