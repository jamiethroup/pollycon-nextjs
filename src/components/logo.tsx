import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <div className="hidden">Pollycon</div>
      <svg id="header__logo" className='w-8' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" clipRule="evenodd" viewBox="0 0 35 50">
        <path className='fill-gray-700' fill="#0d2f3f" fillRule="nonzero" d="M28.761 19.633c-1.5 1.82-3.607 2.743-6.26 2.743H7.564v23.042H3.75V18.61h18.113c1.585 0 2.973-.618 3.91-1.74.79-.948 1.226-2.219 1.226-3.578 0-2.786-1.921-5.668-5.136-5.668H3.75V3.75h18.752c5.746 0 8.363 4.925 8.363 9.5 0 2.47-.747 4.737-2.104 6.383m-17.448 6.494h3.25v19.29h-3.25v-19.29ZM22.502 0H0v11.376h21.863c1.01 0 1.386 1.176 1.386 1.917 0 .476-.13.905-.356 1.176-.14.168-.4.392-1.03.392H0v34.2h18.314V26.127h4.188c3.772 0 6.937-1.421 9.153-4.11 1.91-2.314 2.96-5.428 2.96-8.767C34.615 6.666 30.454 0 22.502 0" />
      </svg>
    </Link>
  );
};

export default Logo;