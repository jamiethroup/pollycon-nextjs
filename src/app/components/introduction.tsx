

import Image from 'next/image';

const componentImages = [
  {
    src: '/images/daftjamie.jpg',
    alt: 'Jamie Coding',
  },
];

export default function Projects() {
  return (
    <section className='snap-start'>
    {/* START - Hero Image */ }
    <div className="relative min-h-screen object-cover flex-row-reverse">
      <Image
        src={componentImages[0].src}
        alt={componentImages[0].alt}
        className='w-full min-h-screen h-full object-right object-cover overflow-hidden'
        width={1250}
        height={1250}
      />
      <div className="w-full h-full bg-[#96BF48] bg-opacity-50 absolute top-0 left-0"></div>
    </div>
    {/* END - Hero Image */ }
    {/* START - Introduction */ }
    <div className="relative py-20 px-5  lg:py-0 lg:min-h-screen bg-[#F2F2F2] items-center justify-center grid grid-cols-12 lg:gap-5">
      <div className="col-span-12 lg:col-start-2 lg:col-end-12">
        <div className="lg:max-w-4xl mx-auto">
          <h2 className="text-[#1E293B] text-4xl font-dm_sans font-bold mb-6"
          >
            Hello, I&rsquo;m Jamie and coding is sorta my thing.
          </h2>
          <p className="font-light leading-relaxed font-dm_sans mb-4"
          >
            In 2024, I celebrated eleven years in my development career, eight of which have been spent working on Shopify.
          </p>
          <p className="font-light leading-relaxed font-dm_sans mb-4"
          >
            I started off my career as an email developer, creating emails for the likes of nPower and Park Dean. I then moved out of in-house and into the agency world, working with a wide range of clients such as the NHS, the University of Leeds, and LVMH.
          </p>
          <p className="font-light leading-relaxed font-dm_sans mb-4"
          >
            In 2016, I was introduced to the world of Shopify. Since then, I&lsquo;ve worked for a number of agencies and freelancing for a number of clients. I have worked on a wide range of projects, from small theme tweaks to large scale migrations and blue chip clients and proejcts.
          </p>
          <p className="font-light leading-relaxed font-dm_sans mb-4"
          >
            I&lsquo;ve transitioned into a Technical lead in my current role, where I am responsible for the development of a number of Shopify stores, as well as managing a team of developers and a multitude of projects.
          </p>
          <p className="font-light leading-relaxed font-dm_sans mb-4"
          >
            As cliché as it sounds, I am passionate about what I do. I love to learn new things and I am always looking to improve my skills.
          </p>
        </div>
      </div>
    </div>
    {/* END - Introduction */ }
    </section>
    )
};