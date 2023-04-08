import Head from 'next/head'
import Image from 'next/image'
import sal from 'sal.js'

// Images
import blackAxeTattoo from '../../public/images/blackaxetattoo.png'
import louLouImages from '../../public/images/loulouimages.png'

export default function Home() {
  sal();
  return (
  <>
  {/* START - Hero */}
  <section className="waveWrapper waveAnimation">
    <div className="w-full h-full flex items-center justify-center relative z-30">
      <div className="container px-6 mt-32 mb-40 md:mt-0 md:mb-0 max-w-7xl mx-auto">
      <h2 
      className='mb-8'
      data-sal="slide-up"
      data-sal-delay="200"
      data-sal-duration="500"
      data-sal-easing="ease-out-back"
      >
        Hi, I&rsquo;m Jamie<span className='animate-wave'>👋</span>
      </h2>
      <h3
      data-sal="slide-up"
      data-sal-delay="700"
      data-sal-duration="750"
      data-sal-easing="ease-out-back"
      >
        I’m a <span className="italic font-cormorant font-medium">shopify developer</span> who loves to create <span className="italic font-cormorant font-medium">pixel perfect websites</span> utilizing on the edge tools.
      </h3>
      <div
        data-sal="slide-up"
        data-sal-delay="1000"
        data-sal-duration="750"
        data-sal-easing="ease-out-back"
      >
      <a 
        href="/case-studies" 
        className="button mt-10"
      >
        View case studies
        <svg className='h-6 ml-2' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512">
          <path className='fill-white' d="m322.7 128.4 100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z"/>
        </svg>
        </a>
      </div>
      </div>
    </div>
    <div className="waveWrapperInner bgTop">
      <div className="wave waveTop"></div>
    </div>
    <div className="waveWrapperInner bgMiddle">
      <div className="wave waveMiddle"></div>
    </div>
    <div className="waveWrapperInner bgBottom">
      <div className="wave waveBottom"></div>
    </div>
  </section>
  {/* END - Hero */}
  {/* START - Freelance Projects */}
  <section className="container mx-auto max-w-7xl py-20 md:py-40">
    <div className="px-6 md:px-0 flex flex-col md:grid md:grid-cols-12 md:gap-10">
      <div
        className="order-last md:order-first col-span-12 md:col-span-5 flex items-start justify-center flex-col"
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="500"
        data-sal-easing="ease-out-back"
      >
        <h4>Black Axe Tattoo Studio</h4>
        <h3 className='font-outfit text-3xl mt-4 font-normal text-gray-700'>Creating an <span className='italic font-cormorant font-medium'>unique design</span> for a Birmingham based studio</h3>
      </div>
      <div className="order-first md:order-last col-span-12 md:col-span-7">
        <figure
          className='p-4 md:p-10 bg-slate-800 mb-6'
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="500"
          data-sal-easing="ease-out-back"
        >
          <Image
            className='shadow-md shadow-gray-800 hover:scale-105 duration-300 transform'
            src={blackAxeTattoo}
            alt="Picture of the author"
          />
        </figure>
      </div>
    </div>
    <div className="col-span-12">
      <h5 
      className='font-outfit uppercase font-light tracking-wide'
      data-sal="slide-up"
      data-sal-delay="200"
      data-sal-duration="500"
      data-sal-easing="ease-out-back"
      >
        How I help
      </h5>
      <h3 
      className='text-gray-800 text-5xl mt-4 max-w-5xl mb-20'
      data-sal="slide-up"
      data-sal-delay="700"
      data-sal-duration="500"
      data-sal-easing="ease-out-back"
      >
        Throughout my career, I've honed my skills to allow me to create <span className='italic font-cormorant font-medium'>interactive web experiences</span> that are both modern and focused on <span className='italic font-cormorant font-medium'>speed</span>
      </h3>
    </div>
    <div className="col-span-12 md:col-span-4">
      
    </div>
    <div className="col-span-12 md:col-span-4">
      <figure className='p-10 bg-indigo-800 mb-6'>
        <Image
          className='shadow-md shadow-gray-800 hover:scale-105 duration-300 transform'
          src={louLouImages}
          alt="Picture of the author"
        />
      </figure>
      <h4>Lou Lou Images</h4>
      <h3 className='font-outfit text-3xl mt-4 font-normal text-gray-700'>Creating an <span className='italic font-cormorant font-medium'>unique design</span> for a Birmingham based studio</h3>
    </div>
    <div className="col-span-12 md:col-span-4">
      <figure className='p-10 bg-slate-800 mb-6'>
        <Image
          className='shadow-md shadow-gray-800 hover:scale-105 duration-300 transform'
          src={blackAxeTattoo}
          alt="Picture of the author"
        />
      </figure>
      <h4>Black Axe Tattoo Studio</h4>
      <h3 className='font-outfit text-3xl mt-4 font-normal text-gray-700'>Creating an <span className='italic font-cormorant font-medium'>unique design</span> for a Birmingham based studio</h3>
    </div>
  </section>
  {/* END - Freelance Projects */}
  </>
  )
}
