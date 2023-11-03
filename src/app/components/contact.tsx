import React, { useState } from 'react';
import Image from 'next/image';

// Images
const WhatsappSVG = `/images/icon-whatsapp.svg`;
const CalendarSVG = `/images/icon-calendar.svg`;
const LinkedinSVG = `/images/icon-linkedin.svg`;
const TwitterSVG = `/images/icon-twitter.svg`;


const locale ={
  title: `Fancy a natter?`,
  description: `I'm always open to new opportunities, so if you'd like to get in touch, please feel free to reach out via any of the following channels:`
}

const links = [
  {
    name: 'Whatsapp',
    link: 'https://wa.me/447591750819',
    image: WhatsappSVG
  },
  {
    name: 'Calendly',
    link: 'https://calendly.com/pollycon/30min',
    image: CalendarSVG
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jamiethroup/',
    image: LinkedinSVG
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/jamiethroup',
    image: TwitterSVG
  },
]

export default function Jobs() {
  return (
    <section className="snap-start">
    <div className="px-5 relative min-h-screen bg-[#FBFBFB] items-center justify-center grid grid-cols-12 lg:gap-5 py-10 md:py-20 2xl:py-40">
      <div className="col-span-12 lg:col-start-2 lg:col-end-12">
        <div className="lg:max-w-4xl mx-auto">
          <h3 className='text-[#1E293B] text-4xl font-dm_sans font-bold mb-6'>{locale.title}</h3>
          <p>
            {locale.description}
          </p>
          <ul className='grid grid-cols-2 gap-x-5 gap-y-6 mt-10'>
            {/* Loop through const links */}
            {links.map((link, index) => (
              <li className='scale-100 hover:scale-105 transition-all duration-200' key={index}>
                <a className='flex items-center gap-2 justify-start' href={link.link} target='_blank' rel='noreferrer'>
                <span className="contact-link" link-type={(link.name).toLowerCase()}>
                  <Image
                    src={link.image}
                    alt={link.name}
                    width={16}
                    height={16}
                  />
                </span>
                <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </section>
  )
}