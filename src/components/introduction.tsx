import Image from 'next/image';

const componentImages = [
  {
    src: '/images/coding.webp',
    alt: 'Jamie Coding',
  },
];

export default function Projects() {
  return (
    <section className='introduction-section'>
    {/* START - Hero Image */ }
    <div className="introduction-section__image">
      <Image
        src={componentImages[0].src}
        alt={componentImages[0].alt}
        width={1250}
        height={1250}
      />
      <div className='introduction-section__overlay'></div>
    </div>
    {/* END - Hero Image */ }
    {/* START - Introduction */ }
    <div className="introduction-block">
      <div className="introduction-block__grid">
        <div className="introduction-block__content">
          <h2 data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease-out-back"
          >
            Hello, I&rsquo;m Jamie and coding is sorta my thing.
          </h2>
          <p data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease-out-back"
          >
            In 2023, I celebrated ten years in my development career, six of which have been spent working on Shopify.
          </p>
          <p data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease-out-back"
          >
            I started off my career as an email developer, creating emails for the likes of nPower and Park Dean Resorts. I then moved into the agency world, working with a wide range of clients such as the NHS, the University of Leeds, and LVMH.
          </p>
          <p data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease-out-back"
          >
            I then moved into the world of Shopify, working for a number of agencies and freelancing for a number of clients. I have worked on a wide range of projects, from small theme tweaks to large scale migrations. Over the years I have gained a wealth of experience and knowledge, and I am always looking to learn more.
          </p>
          <p data-sal="slide-up"
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