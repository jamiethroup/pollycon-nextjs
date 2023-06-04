import React from 'react';
import sal from 'sal.js'
import Image from 'next/image';

const jobs = [
  {
    date: '2022 - Present',
    type: 'Remote',
    title: 'Shopify Developer',
    company: 'Brave The Skies / Dark Matter Commerce',
    description: 'text'
  },
  {
    date: '2021 - 2022',
    type: 'Remote',
    title: 'Developer / Senior Developer',
    company: 'Fost / IDHL Group',
    description: 'text'
  },
  {
    date: '2017 - 2021',
    type: 'West Yorkshire, UK',
    title: 'Developer / Senior Developer',
    company: 'Squashed Pixel',
    description: 'text'
  },
  {
    date: '2016 - 2017',
    type: 'West Yorkshire, UK',
    title: 'Wordpress Developer',
    company: 'LITTLE Agency',
    description: 'text'
  },
  {
    date: '2015 - 2016',
    type: 'West Yorkshire, UK',
    title: 'Juinor Frontend Developer',
    company: 'Enjoy Digital',
    description: 'text'
  },
  {
    date: '2013 - 2015',
    type: 'West Yorkshire, UK',
    title: 'Email Developer',
    company: 'Force24',
    description: 'text'
  }
];


export default function About() {
  sal();
  return (
  <>
  <section className="container mx-auto px-6 max-w-7xl pt-0 mb-10 md:pt-40 md:pb-20">
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-start-2 md:col-end-12 my-40">
        <h5  
        className='font-outfit uppercase font-medium  tracking-wide'
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="500"
        data-sal-easing="ease-out-back"
        >
          How I help
        </h5>
        <h3 
        className='text-gray-800 text-4xl md:text-5xl max-w-4xl mt-6'
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="500"
        data-sal-easing="ease-out-back"
        >
          In 2023, I&rsquo;ve celebrated my ten years in the development, six of which have been spent working with Shopify.
        </h3>
        <p 
        className='text-gray-800 font-outfit text-lgmax-w-3xl font-light mt-6'
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="500"
        data-sal-easing="ease-out-back"
        >
          I&rsquo;ve worked with a wide range of clients, from small businesses to large corporations, and I&rsquo;ve been lucky enough to work with some of the best agencies in the UK.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-12 gap-10 items-center">
      <div className="col-span-3">
        <Image src="/images/spaceman-jamie.webp" width="56" height="56" alt="me"
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="1000"
        data-sal-easing="ease-out-back" />
      </div>
      <div className="col-span-5">
        <Image src="/images/jamie-family.webp" width="56" height="56" alt="me"
        data-sal="slide-left"
        data-sal-delay="350"
        data-sal-duration="1000"
        data-sal-easing="ease-out-back" />
        </div>
      <div className="col-span-4">
        <Image src="/images/jamie-patriots.webp" width="56" height="56" alt="me"
        data-sal="slide-down"
        data-sal-delay="500"
        data-sal-duration="1000"
        data-sal-easing="ease-out-back" />
      </div>
    </div>
    <div className="grid grid-cols-12 gap-10 mt-40">
      <div className="col-span-5">
        <div className="sticky top-10">
        <h3 className='text-gray-700'>Experience</h3>
        <p className='text-gray-700 font-outfit font-light mt-5'>
          I started off my career as an email developer, creating emails for the likes of nPower and Park Dean Resorts. I then moved into the agency world, working with a wide range of clients such as the NHS, the University of Leeds, and LVMH.
        </p>
      <a 
        href="/case-studies" 
        className="button text-gray-700 mr-4 border-gray-700 mt-10 hover:bg-gray-700 hover:text-white group"
      >
        Download CV
        <svg className='h-6 ml-2' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512">
          <path className='fill-gray-700 group-hover:fill-white' d="m322.7 128.4 100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z"/>
        </svg>
        </a>
      <a 
        href="/case-studies" 
        className="button text-gray-700 border-gray-700 mt-10 hover:bg-gray-700 hover:text-white group"
      >
        Visit LinkedIn
        <svg className='h-6 ml-2' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512">
          <path className='fill-gray-700 group-hover:fill-white' d="m322.7 128.4 100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z"/>
        </svg>
        </a>
        </div>
      </div>
      <div className="col-span-7">
        {jobs.map((job,i) => (
        <div key={i} className="job p-10 border border-neutral-200 hover:bg-neutral-50 duration-150 mb-10">
          <div className="flex items-center justify-start mb-4">
            <h5 className="job__date  font-outfit font-light">{job.date}</h5>
            <div className="job__type text-gray-700 dark:text-white font-outfit font-light">{job.type}</div>
          </div>
          <div className="job__meta">
            <h4 className="job__company">{job.company}</h4>
            <h5 className="job__title">{job.title}</h5>
            <p className="job__description">{job.description}</p>
          </div>
        </div>
        ))};
      </div>
    </div>
    </section>
    {/* <EmailForm /> */}
  </>
  )
}
