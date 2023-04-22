import React, {useState} from 'react';

// Import Swiper React components
import {EffectCards, Navigation, Controller, EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const aboutSlides = [
  {
    subtitle: 'About Me',
    title: 'Married to Lucy.',
    description: 'As cliche as it sounds, we we childhood sweethearts, we just didn\'t know it until our twenties. Married since 2021, we have been through a lot together and I couldn\'t be happier to be by her side.',
  },
  {
    subtitle: 'About Me',
    title: 'Father to Emily, Poppy and Conor',
    description: 'I know for a fact that if it wasn\'t for my kids I wouldn\'t be where I am today. They are my rock and my inspiration. I love spending time with them and watching them grow.',
  },
  {
    subtitle: 'About Me',
    title: 'Dog and Cat Dad to Link and Zelda',
    description: '50% of the time they\'re fighting, 50% of the time they\'re sleeping and I won\'t go into detail on where their names came from.',
  },
];

export default function About() {
  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);
  return (
    <section className="container mx-auto px-6 max-w-7xl py-20 md:py-40">
      <div className="grid grid-cols-12 pt-40">
          {/* START - Information Slider - Paragraph */}
          <div className="col-span-8 md:col-span-6">
            <Swiper
              effect={'fade'}
              onSwiper={setSecondSwiper}
              controller={{control: firstSwiper}}
              grabCursor={true}
              navigation={true}
              modules={[EffectFade, Navigation, Controller]}
              className="aboutContentSwiper"
            >
              {aboutSlides.map((slide, i) => (
                <SwiperSlide className='pr-10 md:pr-0' key={i}>
                  <h4 className='mt-10 text-sm uppercase'>{slide.subtitle}</h4>
                  <h2 className="mt-4 max-w-lg leading-normal text-gray-800" data-sal="slide-up" data-sal-delay="350">{slide.title}</h2>
                  <p className="mt-4 max-w-lg mb-20 md:mb-0 font-light text-base text-gray-800" data-sal="slide-up" data-sal-delay="650">{slide.description}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* END - Information Slider - Paragraph */}
          {/* START - Image Slider */}
          <div className="col-span-4 md:col-span-6">
            <Swiper
              effect={'cards'}
              onSwiper={setFirstSwiper}
              controller={{control: secondSwiper}}
              grabCursor={true}
              modules={[EffectCards, Controller]}
              className="aboutCardSwiper"
            >
              {aboutSlides.map((slide, i) => (
                <SwiperSlide key={i}>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* END - Image Slider */}
      </div>
    </section>
  )
}
