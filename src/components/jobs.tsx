import React, { useState } from 'react';
import Image from 'next/image';

const locale ={
  title: `Where I've been...`,
  description: `Over the last ten years, I've been lucky enough to work with some of the best agencies in the UK...`
}

const jobs = [
  {
    date: '2022 - Present',
    logo: '../../images/jobs/bravetheskies.webp',
    color: "#000000",
    type: 'Remote',
    title: 'Shopify Developer',
    company: 'Brave The Skies / Dark Matter Commerce',
    description: 'Briefly working on the retainers team, I was responsible for maintaining, scoping, developing for and updating a number of clients Shopify stores. I was then transferred across to the projects team where I was responsible for building out a number of new Shopify stores for clients.'
  },
  {
    date: '2021 - 2022',
    logo: '../../images/jobs/fostr.svg',
    color: "#000000",
    type: 'Remote',
    title: 'Developer / Senior Developer',
    company: 'Fost / IDHL Group',
    description: 'As a Senior Shopify Project Developer, my day-to-day activities revolve around leading and overseeing the development of complex e-commerce projects on the Shopify platform. I collaborate closely with cross-functional teams, including designers, project managers, and stakeholders, to gather project requirements and devise effective solutions.'
  },
  {
    date: '2017 - 2021',
    logo: '../../images/jobs/squashed-pixel.jpg',
    color: "#A02575",
    type: 'West Yorkshire, UK',
    title: 'Developer / Senior Developer',
    company: 'Squashed Pixel',
    description: 'As a Shopify Developer, my day-to-day activities involve creating and optimizing e-commerce websites on the Shopify platform. Starting as a Junior, I have grown into a Senior role, continually learning and honing my skills through hands-on experience here.'
  },
  {
    date: '2016 - 2017',
    logo: '../../images/jobs/little.jpeg',
    color: "#E94840",
    type: 'West Yorkshire, UK',
    title: 'Wordpress Developer',
    company: 'LITTLE Agency',
    description: 'As a WordPress Developer with server management responsibilities, my day-to-day activities are a dynamic blend of web development and server administration.'
  },
  {
    date: '2015 - 2016',
    logo: '../../images/jobs/enjoy-digital.jpg',
    color: "#EC654F",
    type: 'West Yorkshire, UK',
    title: 'Juinor Frontend Developer',
    company: 'Enjoy Digital',
    description: 'As a Junior Front End Developer, my day-to-day activities focus on crafting and enhancing front end templates for Umbraco, a versatile content management system. I collaborate closely with the design and development teams to convert visual designs into responsive and user-friendly web templates using HTML, CSS, and JavaScript.'
  },
  {
    date: '2013 - 2015',
    logo: '../../images/jobs/force24.png',
    color: "#C9FEF7",
    type: 'West Yorkshire, UK',
    title: 'Email Developer',
    company: 'Force24',
    description: 'As a Junior Email Developer, I played a critical role in shaping captivating and effective email campaigns for our organization. Working closely with the talented marketing and design teams, I turned their creative visions into reality by coding and implementing eye-catching email templates. My focus revolved around ensuring seamless rendering across diverse email clients and devices.'
  }
];

export default function Jobs() {
  return (
    <section className="snap-start">
    <div className="px-5 relative min-h-screen bg-[#FBFBFB] items-center justify-center grid grid-cols-12 lg:gap-5 py-10 md:py-20 2xl:py-40">
      <div className="col-span-12 lg:col-start-2 lg:col-end-12">
        <div className="lg:max-w-4xl mx-auto">
        <h2 className="text-[#1E293B] text-4xl font-dm_sans font-bold mb-5 lg:mb-10"
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="500"
          data-sal-easing="ease-out-back"
        >
          {locale.title}
        </h2>
        <p className="font-light leading-relaxed font-dm_sans mb-4"
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration="500"
          data-sal-easing="ease-out-back"
        >
          {locale.description}
        </p>
        {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg px-5 pt-8 pb-6 shadow-lg mt-10 lg:mt-20 relative"
            data-sal="slide-up"
            data-sal-delay="400"
            data-sal-duration="500">
              <div className="absolute -top-2 -right-2 lg:-top-10 lg:-right-8 h-16 w-16 rounded-full">
                <Image
                  className="h-full w-full rounded-full"
                  src={job.logo}
                  alt="Picture of the author"
                  width={48}
                  height={48}
                />
              </div>
              <div style={{backgroundColor: job.color as string} as React.CSSProperties} className={`font-semibold rounded-full p-1 inline-flex px-3 text-sm  uppercase text-white`}>{job.date}</div>
              <h2 className="text-2xl font-medium text-black my-4">{job.company}</h2>
              <p className="text-sm lg:text-base font-dm_sans text-neutral-400 leading-loose pr-4 lg:pr-10 mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}