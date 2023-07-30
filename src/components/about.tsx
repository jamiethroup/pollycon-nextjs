import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectCards, Navigation, Controller, EffectFade, SwiperOptions, Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

// Define Swiper options
const cardsSwiperOptions: SwiperOptions = {
  effect: 'cards',
  grabCursor: true,
  modules: [EffectCards, Controller],
};

const fadeSwiperOptions: SwiperOptions = {
  effect: 'fade',
  grabCursor: true,
  navigation: true,
  modules: [EffectFade, Navigation, Controller],
};

interface Slide {
  subtitle: string;
  title: string;
  description: string;
}

const aboutImages = [
  {
    src: '/images/jamie-lucy.webp',
    alt: 'About Me',
  },
  {
    src: '/images/jamie-kids.webp',
    alt: 'About Me',
  },
  {
    src: '/images/zelda-link.webp',
    alt: 'About Me',
  },
];

const aboutSlides: Slide[] = [
  {
    subtitle: 'About Me',
    title: 'Married to Lucy.',
    description:
      "As cliche as it sounds, we we childhood sweethearts, we just didn't know it until our twenties. Married since 2021, we have been through a lot together and I couldn't be happier to be by her side.",
  },
  {
    subtitle: 'About Me',
    title: 'Father to Emily, Poppy and Conor',
    description:
      "I know for a fact that if it wasn't for my kids I wouldn't be where I am today. They are my rock and my inspiration. I love spending time with them and watching them grow.",
  },
  {
    subtitle: 'About Me',
    title: 'Dog and Cat Dad to Link and Zelda',
    description: "50% of the time they're fighting, 50% of the time they're sleeping and I won't go into detail on where their names came from.",
  },
];

const About: React.FC = () => {
  const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null); // Use SwiperType instead of typeof Swiper
  const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null); // Use SwiperType instead of typeof Swiper

  return (
    <section className="container mx-auto px-6 max-w-7xl pt-0 mb-10 md:py-10">
      <div className="grid grid-cols-12 pt-40">
        {/* START - Information Slider - Paragraph */}
        <div className="col-span-12 order-2 md:order-1 pl-4 md:col-span-6">
          <Swiper
            {...fadeSwiperOptions}
            controller={{ control: firstSwiper }}
            className="aboutContentSwiper"
          >
            {aboutSlides.map((slide, i) => (
              <SwiperSlide className="pr-10 md:pr-0" key={i}>
                <h4 className="mt-10 text-sm uppercase">{slide.subtitle}</h4>
                <h2 className="mt-4 text-4xl max-w-lg leading-normal text-gray-800">
                  {slide.title}
                </h2>
                <p className="mt-4 max-w-lg mb-20 md:mb-0 pr-20 font-light text-base text-gray-800">
                  {slide.description}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* END - Information Slider - Paragraph */}
        {/* START - Image Slider */}
        <div className="col-span-12 order-1 md:order-2 md:col-span-6 mr-0 md:mr-0">
          <Swiper
            {...cardsSwiperOptions}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            className="aboutCardSwiper scale-75 md:scale-100 max-w-max mr-0 !md:mr-10  2xl:max-w-none"
          >
            {aboutSlides.map((slide, i) => (
              <SwiperSlide key={i}>
              <Image
                src={aboutImages[i].src}
                alt={aboutImages[i].alt}
                className='w-full max-w-full overflow-hidden'
                width={750}
                height={920}
              />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* END - Image Slider */}
      </div>
    </section>
  );
};
 
export default About;