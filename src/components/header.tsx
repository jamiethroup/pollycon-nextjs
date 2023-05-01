import React, { useState, useRef } from "react";
import Link from 'next/link'
import MobileMenu from '@/components/mobile-menu'
const strings = {
  contact_label: 'Contact'
}


// Linklist
const links = [
  {
    "label": "Home",
    "path": "/",
  },
  {
    "label": "About",
    "path": "/about",
  },
  {
    "label": "Words",
    "path": "/words",
  },
  {
    "label": "Work",
    "path": "/work",
  },
]

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const ChildRef =  useRef();
  const updateState = () => {
    setIsNavExpanded(true)
  }
  return (
    <>
    <header className='absolute z-50 top-0 left-0 w-full'>
      <div className='container max-w-7xl mx-auto grid grid-cols-12 py-6 px-6'>
        <div className="col-span-6 md:col-span-2">
          <Link href='/'>
            <div className="hidden">Pollycon</div>
            <svg className='w-8' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" clipRule="evenodd" viewBox="0 0 35 50">
              <path className='fill-white' fill="#0d2f3f" fillRule="nonzero" d="M28.761 19.633c-1.5 1.82-3.607 2.743-6.26 2.743H7.564v23.042H3.75V18.61h18.113c1.585 0 2.973-.618 3.91-1.74.79-.948 1.226-2.219 1.226-3.578 0-2.786-1.921-5.668-5.136-5.668H3.75V3.75h18.752c5.746 0 8.363 4.925 8.363 9.5 0 2.47-.747 4.737-2.104 6.383m-17.448 6.494h3.25v19.29h-3.25v-19.29ZM22.502 0H0v11.376h21.863c1.01 0 1.386 1.176 1.386 1.917 0 .476-.13.905-.356 1.176-.14.168-.4.392-1.03.392H0v34.2h18.314V26.127h4.188c3.772 0 6.937-1.421 9.153-4.11 1.91-2.314 2.96-5.428 2.96-8.767C34.615 6.666 30.454 0 22.502 0"/>
            </svg>
          </Link>
        </div>
        <div className="col-span-6 flex items-center justify-end md:hidden">
          <label htmlFor="check">
            <input onClick={() =>  ChildRef.current.callChildFunction()} type="checkbox" id="check"/> 
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="hidden md:col-span-10 md:flex items-center justify-end">
          <nav>
            <ul className='flex items-center flex-1 gap-8'>
            {links.map((link, i) => (
              <li key={link.path}>
                <Link className='font-outfit text-white block text-sm hover:-translate-y-0.5 duration-150 font-medium' href={link.path}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a className='contact-link border border-white text-white flex items-center gap-1 rounded-full py-1.5 px-3 -ml-3 font-outfit text-sm duration-150 ease-in-out hover:bg-black hover:text-white font-medium' href='mailto:hello@pollycon.co.uk?subject=Contact from Pollycon Website'>
                <span>{strings.contact_label}</span>
                <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path className='fill-white' d="M19.47 31a2 2 0 0 1-1.8-1.09l-4-7.57a1 1 0 0 1 1.77-.93l4 7.57L29 3.06 3 12.49l9.8 5.26 8.32-8.32a1 1 0 0 1 1.42 1.42l-8.85 8.84a1 1 0 0 1-1.17.18L2.09 14.33a2 2 0 0 1 .25-3.72l25.91-9.48a2 2 0 0 1 2.62 2.62l-9.48 25.91A2 2 0 0 1 19.61 31Z" data-name="Layer 45"/>
                </svg>
              </a>
            </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <MobileMenu  ref={ChildRef} callparentfunction={() => setIsNavExpanded} />
    </>
  )
}
