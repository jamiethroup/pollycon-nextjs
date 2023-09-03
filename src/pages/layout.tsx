import React, { ReactNode, useEffect } from "react";
import { useRouter } from 'next/router';
import sal from 'sal.js';
import Header from '@/components/header'
import Footer from '@/components/footer'
import { DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import ScrollClassAdder from '@/components/scrollclassadder'; // Adjust the import path if needed
import Image from 'next/image';


const dmsans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm_sans',
})

// Create a type for the children prop
type Props = {
  children: ReactNode;
};

// Intersection Observer setup (define it outside the component)
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};


const componentImages = [
  {
    src: '/images/coding.webp',
    alt: 'Jamie Coding',
  },
];
const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();

  useEffect(() => {
    sal();
  }, []);

  const pageId = pathname === "/" ? "index" : pathname.replace('/', '');

  return (
    <>
      <div id={pageId} className={`${dmsans.variable} ${pathname.length === 1 ? 'index' : pathname.replace('/', '')}`}>
        <div className="grid z-[999999] relative grid-cols-2 min-h-screen">
          <div className="bg-[#1E293B]">
            <div className="max-h-screen sticky top-0 left-0 h-full w-full text-white flex items-start justify-between p-10 flex-col">
              <div>
                <svg fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" className="w-8" clipRule="evenodd" viewBox="0 0 35 50"><path fill="#C3D4F0" fillRule="nonzero" d="M28.761 19.633c-1.5 1.82-3.607 2.743-6.26 2.743H7.564v23.042H3.75V18.61h18.113c1.585 0 2.973-.618 3.91-1.74.79-.948 1.226-2.219 1.226-3.578 0-2.786-1.921-5.668-5.136-5.668H3.75V3.75h18.752c5.746 0 8.363 4.925 8.363 9.5 0 2.47-.747 4.737-2.104 6.383m-17.448 6.494h3.25v19.29h-3.25v-19.29ZM22.502 0H0v11.376h21.863c1.01 0 1.386 1.176 1.386 1.917 0 .476-.13.905-.356 1.176-.14.168-.4.392-1.03.392H0v34.2h18.314V26.127h4.188c3.772 0 6.937-1.421 9.153-4.11 1.91-2.314 2.96-5.428 2.96-8.767C34.615 6.666 30.454 0 22.502 0" className="fill-[#96BF48]" /></svg>

              </div>
              <div><h1 className="font-dm_sans text-5xl leading-tight font-bold text-[#96BF48]">Hello, I'm Jamie, an Experienced Shopify Developer based in West Yorkshire 🐮</h1></div>
              <div className="text-[#C3D4F0] text-xs leading-6">
                Find me on <a className="underline" href="#">X</a>, <a className="underline" href="#">Github</a> and <a className="underline" href="#">Linkedin</a><br></br>
                <a href="#" className="underline">Download</a> my Resume (PDF)

              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative min-h-screen object-cover">
              <Image
                src={componentImages[0].src}
                alt={componentImages[0].alt}
                className='w-full min-h-screen h-full object-right object-cover overflow-hidden'
                width={1250}
                height={1250}
              />
              <div className="w-full h-full bg-[#96BF48] bg-opacity-50 absolute top-0 left-0"></div>
            </div>
            <div className="relative min-h-screen bg-[#F2F2F2] items-center justify-center grid grid-cols-12 gap-5 p-5">
              <div className="col-start-2 col-end-12">
                <h2 className="text-[#1E293B] text-4xl font-dm_sans font-bold mb-10"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-back"
                >
                  Hello, I'm Jamie, an Experienced Shopify Developer
                </h2>
                <p className="font-light leading-relaxed font-dm_sans mb-4"
                  data-sal="slide-up"
                  data-sal-delay="600"
                  data-sal-easing="ease-out-back"
                >
                  In 2023, I’ve celebrated my ten years in the development, six of which have been spent working with Shopify.
                </p>
                <p className="font-light leading-relaxed font-dm_sans mb-4"
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-back"
                >
                  I started off my career as an email developer, creating emails for the likes of nPower and Park Dean Resorts. I then moved into the agency world, working with a wide range of clients such as the NHS, the University of Leeds, and LVMH.
                </p>
              </div>
            </div>
            <div className="relative min-h-screen bg-[#FBFBFB] items-center justify-center grid grid-cols-12 gap-5 p-5">
              <div className="col-start-2 col-end-12">
                <h2 className="text-[#1E293B] text-4xl font-dm_sans font-bold mb-10"
                  data-sal="slide-up"
                  data-sal-delay="200"
                  data-sal-duration="500"
                  data-sal-easing="ease-out-back"
                >
                  Where I've been...
                </h2>
                <p className="font-light leading-relaxed font-dm_sans mb-4"
                  data-sal="slide-up"
                  data-sal-delay="400"
                  data-sal-duration="500"
                  data-sal-easing="ease-out-back"
                >
                  I started off my career as an email developer, creating emails for the likes of nPower and Park Dean Resorts. I then moved into the agency world, working with a wide range of clients such as the NHS, the University of Leeds, and LVMH.
                </p>
                <div className="bg-white rounded-lg p-5 shadow-lg mt-10 relative"
                  data-sal="slide-up"
                  data-sal-delay="600"
                  data-sal-duration="500"
                  data-sal-easing="ease-out-back">
                  <div className="absolute -top-4 -right-2 h-12 w-12 bg-red-500 rounded-full"></div>
                  <div className="bg-red-500 rounded-full p-1 inline-flex px-3 text-xs text-white uppercase">2022 - Now</div>
                  <h2 className="text-lg text-black mt-2">Brave The Skies / Dark Matter Commerce</h2>
                  <p className="text-xs font-dm_sans text-[#1D293A] leading-loose pr-10 mt-2">As a Shopify Developer, I play a pivotal role in crafting and maintaining exceptional e-commerce websites on the Shopify platform. Leveraging my expertise, I recently rebuilt the framework, infusing the team with my valuable experience. I collaborate closely with designers and project managers to translate concepts into fully functional and visually appealing online stores using Liquid, HTML, CSS, and JavaScript. My day-to-day activities involve customizing themes, implementing new features, and optimizing site performance.</p>
                </div>
                <div className="bg-white rounded-lg p-5 shadow-lg mt-10 relative"
                  data-sal="slide-up"
                  data-sal-delay="600"
                  data-sal-duration="500"
                  data-sal-easing="ease-out-back">
                  <div className="absolute -top-4 -right-2 h-12 w-12 bg-red-500 rounded-full"></div>
                  <div className="bg-red-500 rounded-full p-1 inline-flex px-3 text-xs text-white uppercase">2022 - Now</div>
                  <h2 className="text-lg text-black mt-2">Brave The Skies / Dark Matter Commerce</h2>
                  <p className="text-xs font-dm_sans text-[#1D293A] leading-loose pr-10 mt-2">As a Shopify Developer, I play a pivotal role in crafting and maintaining exceptional e-commerce websites on the Shopify platform. Leveraging my expertise, I recently rebuilt the framework, infusing the team with my valuable experience. I collaborate closely with designers and project managers to translate concepts into fully functional and visually appealing online stores using Liquid, HTML, CSS, and JavaScript. My day-to-day activities involve customizing themes, implementing new features, and optimizing site performance.</p>
                </div>
                <div className="bg-white rounded-lg p-5 shadow-lg mt-10 relative"
                  data-sal="slide-up"
                  data-sal-delay="600"
                  data-sal-duration="500"
                  data-sal-easing="ease-out-back">
                  <div className="absolute -top-4 -right-2 h-12 w-12 bg-red-500 rounded-full"></div>
                  <div className="bg-red-500 rounded-full p-1 inline-flex px-3 text-xs text-white uppercase">2022 - Now</div>
                  <h2 className="text-lg text-black mt-2">Brave The Skies / Dark Matter Commerce</h2>
                  <p className="text-xs font-dm_sans text-[#1D293A] leading-loose pr-10 mt-2">As a Shopify Developer, I play a pivotal role in crafting and maintaining exceptional e-commerce websites on the Shopify platform. Leveraging my expertise, I recently rebuilt the framework, infusing the team with my valuable experience. I collaborate closely with designers and project managers to translate concepts into fully functional and visually appealing online stores using Liquid, HTML, CSS, and JavaScript. My day-to-day activities involve customizing themes, implementing new features, and optimizing site performance.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <main>{children}</main>
        <Footer />
        <Analytics />
        <ScrollClassAdder />
      </div>
    </>
  );
};

export default Layout;