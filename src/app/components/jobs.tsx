import FadingSection from '../components/fadeIn';
import React, { useState } from 'react';
import Image from 'next/image';

const locale ={
  title: `Where I've been...`,
  description: `Over the last eleven years, I've been lucky enough to work with some of the best agencies in the UK...`
}

const jobs = [
  {
    date: '2022 - Present',
    logo: '/images/jobs/bravetheskies.webp',
    color: "#000000",
    type: 'Remote',
    title: 'Shopify Developer',
    company: 'Brave The Skies',
    description: 'Briefly working on the retainers team, I was responsible for maintaining, scoping, developing for and updating a number of clients Shopify stores. I was then transferred across to the projects team where I was responsible for building out a number of new Shopify stores for clients. I am now the technical lead for the projects team, responsible for overseeing the development of all new Shopify'
  },
  {
    date: '2021 - 2022',
    logo: '/images/jobs/fostr.svg',
    color: "#000000",
    type: 'Remote',
    title: 'Shopify Project Developer',
    company: 'Fostr',
    description: 'As a Shopify Project Developer, my day-to-day activities revolve around leading and overseeing the development of complex e-commerce projects with clients that were based in US, France and the UK. Effective time management and communication skills are essential in this role, as well as the ability to work well under pressure.'
  },
  {
    date: '2017 - 2021',
    logo: '/images/jobs/squashed-pixel.jpg',
    color: "#A02575",
    type: 'West Yorkshire, UK',
    title: 'Developer / Team Lead',
    company: 'Squashed Pixel',
    description: 'As a Shopify Developer, my day-to-day activities involve creating and optimizing e-commerce websites on the Shopify platform. Starting as a Junior and progressing into the team lead, I spent my first couple of years concentrating solely on learning the Shopify ecosystem. I then moved into a team lead role, where I was responsible for managing a team of developers, as well as being responsible for the development of a number of Shopify stores.'
  },
  {
    date: '2016 - 2017',
    logo: '/images/jobs/little.jpeg',
    color: "#E94840",
    type: 'West Yorkshire, UK',
    title: 'Wordpress Developer',
    company: 'LITTLE Agency',
    description: 'As a WordPress Developer with server management responsibilities, my day-to-day activities are a dynamic blend of web development and server administration. I was able to see projects through from conception to completion, including WooCommerce integrations, custom plugin development, and server migrations.'
  },
  {
    date: '2015 - 2016',
    logo: '/images/jobs/enjoy-digital.jpg',
    color: "#EC654F",
    type: 'West Yorkshire, UK',
    title: 'Juinor Frontend Developer',
    company: 'Enjoy Digital',
    description: 'As a Junior Front End Developer, my day-to-day activities focus on crafting and enhancing front end templates for Umbraco. I collaborate dclosely with the design and back-end development teams to convert visual designs into responsive and user-friendly web templates using HTML, CSS, and jQuery.'
  },
  {
    date: '2013 - 2015',
    logo: '/images/jobs/force24.png',
    color: "#C9FEF7",
    type: 'West Yorkshire, UK',
    title: 'Email Developer',
    company: 'Force24',
    description: 'As a Junior Email Developer, my role included developing, testing and scheduling campaigns for a range of clients. My focus revolved around ensuring seamless rendering across diverse email clients and devices.'
  }
];

export default function Jobs() {
  return (
    <section className="snap-start">
      <FadingSection>
      <div className="px-5 relative min-h-screen bg-[#FBFBFB] items-center justify-center grid grid-cols-12 lg:gap-5 py-10 md:py-20 2xl:py-40">
        <div className="col-span-12 lg:col-start-2 lg:col-end-12">
          <div className="lg:max-w-4xl mx-auto">
          <h2 className="text-[#1E293B] text-4xl font-dm_sans font-bold mb-5 lg:mb-10"
          >
            {locale.title}
          </h2>
          <p className="font-light leading-relaxed font-dm_sans mb-4"
          >
            {locale.description}
          </p>
          {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-lg px-5 pt-8 pb-6 shadow-lg mt-10 lg:mt-20 relative next-fade">
                <div style={{backgroundColor: job.color as string} as React.CSSProperties} className="absolute -top-2 -right-2 lg:-top-10 lg:-right-8 h-16 w-16 flex items-center justify-center rounded-full">
                  <Image
                    src={job.logo}
                    alt="Picture of the author"
                    width={52}
                    height={52}
                    className='w-1/2 h-1/2 rounded-full'
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
      </FadingSection>
    </section>
  )
}