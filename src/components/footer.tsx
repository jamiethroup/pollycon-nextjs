import Head from 'next/head'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
    <footer>
      <div className='container mx-auto px-6 max-w-7xl py-10 md:py-40'>
        <div className="grid grid-cols-12 md:gap-20">
          <div
            className="col-span-12 md:col-span-6 h-full text-center"
          >
            <div
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="500"
              data-sal-easing="ease-out-back"
            >
              <div className="border border-gray-300 py-16 px-20">
                <h3 className='text-white text-2xl mb-4'>What I&rsquo;m working on at the moment?</h3>
                <p className='mb-4 text-sm text-gray-900'>I&rsquo;m currently working full time at <a href='https://bravetheskies.com/' className='underline'>Brave The Skies</a> but I&rsquo;m always playing with something new and I keep it pretty public on  Github.</p>
                <a className='inline-flex font-bold text-sm text-white' href="#">Github Linkage</a>
              </div>
            </div>
          </div>
          <div
            className="col-span-12 md:col-span-6 h-full text-center mt-20"
          >
            <div
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="500"
              data-sal-easing="ease-out-back"
            >
              <div className="border border-gray-300 py-16 px-20">
                <h3 className='text-white text-2xl mb-4'>Want to work together?</h3>
                <p className='mb-4'>I&rsquo;m always up to work on community or paid for project&rsquo;s!</p>
                <a className='inline-flex font-bold text-sm text-white' href="mailto:hello@pollycon.co.uk">Let&rsquo;s chat</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300">
        <div className='container mx-auto px-6 max-w-7xl pb-10 md:pb-20 pt-20'>
          <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <svg className='w-8 mb-8' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" clipRule="evenodd" viewBox="0 0 35 50">
              <path className='fill-white' fill="#0d2f3f" fillRule="nonzero" d="M28.761 19.633c-1.5 1.82-3.607 2.743-6.26 2.743H7.564v23.042H3.75V18.61h18.113c1.585 0 2.973-.618 3.91-1.74.79-.948 1.226-2.219 1.226-3.578 0-2.786-1.921-5.668-5.136-5.668H3.75V3.75h18.752c5.746 0 8.363 4.925 8.363 9.5 0 2.47-.747 4.737-2.104 6.383m-17.448 6.494h3.25v19.29h-3.25v-19.29ZM22.502 0H0v11.376h21.863c1.01 0 1.386 1.176 1.386 1.917 0 .476-.13.905-.356 1.176-.14.168-.4.392-1.03.392H0v34.2h18.314V26.127h4.188c3.772 0 6.937-1.421 9.153-4.11 1.91-2.314 2.96-5.428 2.96-8.767C34.615 6.666 30.454 0 22.502 0"/>
            </svg>
            <p className='font-outfit max-w-md'>Pollycon is the digital playground for Jamie Throup, a senior shopify developer with over 10 years experience in web development</p>
          </div>

          <div className="col-span-12 md:col-span-6">
            <ul className='grid grid-cols-2 mt-6 md:mt-16 pt-3 max-w-sm ml-auto'>
              <li><a className='font-outfit text-sm text-white mb-8 font-medium inline-block' href="#">Home</a></li>
              <li><a className='font-outfit text-sm text-white mb-8 font-medium inline-block' href="#">About</a></li>
              <li><a className='font-outfit text-sm text-white mb-8 font-medium inline-block' href="#">Words</a></li>
              <li><a className='font-outfit text-sm text-white mb-8 font-medium inline-block' href="#">Contact</a></li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
