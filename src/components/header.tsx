import React from 'react';

const logoSvg = (
  <svg
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    className="w-10"
    clipRule="evenodd"
    viewBox="0 0 35 50"
  >
    <path
      fill="#C3D4F0"
      fillRule="nonzero"
      d="M28.761 19.633c-1.5 1.82-3.607 2.743-6.26 2.743H7.564v23.042H3.75V18.61h18.113c1.585 0 2.973-.618 3.91-1.74.79-.948 1.226-2.219 1.226-3.578 0-2.786-1.921-5.668-5.136-5.668H3.75V3.75h18.752c5.746 0 8.363 4.925 8.363 9.5 0 2.47-.747 4.737-2.104 6.383m-17.448 6.494h3.25v19.29h-3.25v-19.29ZM22.502 0H0v11.376h21.863c1.01 0 1.386 1.176 1.386 1.917 0 .476-.13.905-.356 1.176-.14.168-.4.392-1.03.392H0v34.2h18.314V26.127h4.188c3.772 0 6.937-1.421 9.153-4.11 1.91-2.314 2.96-5.428 2.96-8.767C34.615 6.666 30.454 0 22.502 0"
      className="fill-[#96BF48]"
    />
  </svg>
);

const locale = {
  header: {
    title: `Hello, I'm Jamie, an senior Shopify developer based in West Yorkshire 🐮`,
    subtitle: `Welcome to my digital portfolio of-sorts.`,
  },
  description: `Over the last ten years, I've been lucky enough to work with some of the best agencies in the UK...`
}


export default function Header() {
  return (
    <React.Fragment>
      <header className='header'>
        <div className="header__container">
          <div className='header__logo'>{logoSvg}</div>
          <div className="header__content">
            <h1>
              {locale.header.title}
            </h1>
            <h2>{locale.header.subtitle}</h2>
            <a
              href="mailto:hello@pollycon.co.uk"
              className="button"
            >
              Let&rsquo;s work together
            </a>
          </div>
          <div className="header__social-info">
            Find me on{' '}
            <a target="_blank" rel="noopener" href="https://twitter.com/jamiethroup">
              X
            </a>
            ,{' '}
            <a target="_blank" rel="noopener" href="https://github.com/jamiethroup">
              Github
            </a>{' '}
            and{' '}
            <a href="https://www.linkedin.com/in/jamiethroup/">
              Linkedin
            </a>
            <span className="block">
            <a
              target="_blank"
              rel="noopener"
              href="https://drive.google.com/file/d/1916JT7S5UEFp_t-igMjx1GJ-N8WXcvpr/view?usp=sharing"
            >
              Download
            </a>{' '}
            my Resume (PDF)
            </span>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}