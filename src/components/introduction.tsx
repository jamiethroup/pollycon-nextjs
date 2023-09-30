

import Image from 'next/image';



const componentImages = [
  {
    src: '/images/coding.webp',
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
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease-out-back"
          >
            Hello, I&rsquo;m Jamie and coding is sorta my thing.
          </h2>
          <p className="font-light leading-relaxed font-dm_sans mb-4"
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease-out-back"
          >
            In 2023, I celebrated ten years in my development career, six of which have been spent working on Shopify.
          </p>
          <p className="font-light leading-relaxed font-dm_sans mb-4"
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease-out-back"
          >
            I started off my career as an email developer, creating emails for the likes of nPower and Park Dean Resorts. I then moved into the agency world, working with a wide range of clients such as the NHS, the University of Leeds, and LVMH.
          </p>
          <p className="font-light leading-relaxed font-dm_sans mb-4"
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease-out-back"
          >
            I then moved into the world of Shopify, working for a number of agencies and freelancing for a number of clients. I have worked on a wide range of projects, from small theme tweaks to large scale migrations. Over the years I have gained a wealth of experience and knowledge, and I am always looking to learn more.
          </p>
          <p className="font-light leading-relaxed font-dm_sans mb-4"
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease-out-back"
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