import React, { useState, forwardRef, useImperativeHandle } from "react";
import Link from 'next/link'

const links = [
  {
    label: "About",
    path: "/about",
    icon: 'person'
  },
  {
    label: "Words",
    path: "/words",
    icon: 'pencil'
  },
  {
    label: "Work",
    path: "/work",
    icon: 'work'
  },
]

// eslint-disable-next-line react/display-name
const MobileMenu = forwardRef((props, ref) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useImperativeHandle(ref, () => ({
    callChildFunction(){
      console.log('Test');
      setIsNavExpanded(!isNavExpanded);
    }
  }));
  return (
    <>
        <aside
        className={
          isNavExpanded ? "mobile-menu expanded" : "mobile-menu"
        } 
        >
          <div className="mobile-menu-inner">
            <div className="mobile-menu-inner__main">
            <ul>
            {links.map((link, i) => (
              <li key={link.path}>
                <Link className='font-outfit text-gray-500 block text-sm hover:-translate-y-0.5 duration-150 font-medium' href={link.path}>
                  <div>
                  <span className={link.icon}></span>
                  <span> {link.label}</span>
                  </div>
                  </Link>
              </li>
            ))}
            </ul></div>
          </div>
        </aside>
    </>
  );
});

export default MobileMenu