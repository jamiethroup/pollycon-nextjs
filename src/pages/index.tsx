import React, {useState} from 'react';
import Image from 'next/image'
import sal from 'sal.js'

// Components
import Hero from '@/components/hero'

// Import Swiper React components
import {EffectCards, Navigation, Controller, EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// Images
import blackAxeTattoo from '../../public/images/blackaxetattoo.png'
import louLouImages from '../../public/images/loulouimages.png'

// Clients
import beis from '../../public/images/clients/beis.webp'
import costcutter from '../../public/images/clients/costcutter.webp'
import finnmark from '../../public/images/clients/finnmark.webp'
import laredoute from '../../public/images/clients/laredoute.webp'
import lvmh from '../../public/images/clients/lvmh.webp'
import mec from '../../public/images/clients/mec.webp'
import npower from '../../public/images/clients/npower.webp'
import travelopia from '../../public/images/clients/travelopia.webp'

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

const projects = [
  {
    subtitle: 'Black Axe Tattoo Studio',
    class: 'py-4 md:p-14 bg-slate-800 mb-6',
    title: 'Creating an <span class="italic font-cormorant font-medium">unique design</span> for a Birmingham based studio',
    image: blackAxeTattoo,
  },
  {
    subtitle: 'Lou Lou Images',
    class: 'py-4 md:p-14 bg-teal-800 mb-6',
    title: 'Creating an <span class="italic font-cormorant font-medium">unique design</span> for a Birmingham based studio',
    image: louLouImages,
  },
];

export default function Home() {
    const [firstSwiper, setFirstSwiper] = useState<any>(null);;
  const [secondSwiper, setSecondSwiper] = useState<any>(null);;
  sal();
  return (
  <>
  {/* START - Hero */}
  <Hero/>
  {/* END - Hero */}
  {/* START - Freelance Projects */}
  
  <section className="container mx-auto px-6 max-w-7xl py-20 md:py-40">
    <div className="grid grid-cols-12">
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
      className='text-gray-800 text-2xl md:text-5xl mt-4 max-w-5xl mb-20'
      data-sal="slide-up"
      data-sal-delay="700"
      data-sal-duration="500"
      data-sal-easing="ease-out-back"
      >
        Throughout my career, I&rsquo;ve honed my skills to allow me to create <span className='italic font-cormorant font-medium'>interactive web experiences</span> that are both modern and focused on <span className='italic font-cormorant font-medium'>speed</span>
      </h3>
    </div>
    </div>
      {projects.map((project,i) => (
        <div className="project-block px-6 md:px-0 py-10 md:py-20 flex flex-col md:grid md:grid-cols-12 md:gap-10" key={i}>
          <div
            className="order-last md:order-first col-span-12 md:col-span-5 flex items-start justify-center flex-col"
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="500"
            data-sal-easing="ease-out-back"
          >
            <h4
              dangerouslySetInnerHTML={{__html: project.subtitle}}
            ></h4>
            <h3 
              className='font-outfit text-3xl mt-4 font-normal text-gray-700'
              dangerouslySetInnerHTML={{__html: project.title}}>
            </h3>
          </div>
          <div className="order-first md:order-last col-span-12 md:col-span-7">
            <figure
              className={project.class}
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-duration="500"
              data-sal-easing="ease-out-back"
            >
              <Image
                className='shadow-md shadow-gray-800 hover:scale-105 duration-300 rounded-xl transform'
                src={project.image}
                alt="Picture of the author"
              />
            </figure>
          </div>
        </div>
      ))}
    <div className='px-6 py-20 md:px-0 grid md:grid-cols-12 md:gap-10'>
      <div className="col-span-12 text-center">
        <h5 
        className='font-outfit uppercase font-light tracking-wide'
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="500"
        data-sal-easing="ease-out-back"
        >
          Other Clients
        </h5>
        <h3 
        className='text-gray-800 text-3xl mt-4 mx-auto mb-20'
        data-sal="slide-up"
        data-sal-delay="700"
        data-sal-duration="500"
        data-sal-easing="ease-out-back"
        >
        That I&rsquo;ve worked with during my career
        </h3>
      </div>
      <div className="col-span-6 md:col-span-3">
          <figure
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="200"
            data-sal-easing="ease-out-back"
          >
            <Image
              className='grayscale hover:grayscale-0 duration-300 ease-in-linear hover:scale-105 max-w-xs mx-auto'
              src={beis}
              alt="Picture of the author"
            />
          </figure>
      </div>
      <div className="col-span-6 md:col-span-3">
          <figure
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="200"
            data-sal-easing="ease-out-back"
          >
            <Image
              className='grayscale hover:grayscale-0 duration-300 ease-in-linear hover:scale-105 max-w-xs mx-auto'
              src={costcutter}
              alt="Picture of the author"
            />
          </figure>
      </div>
      <div className="col-span-6 md:col-span-3">
          <figure
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-duration="200"
            data-sal-easing="ease-out-back"
          >
            <Image
              className='grayscale hover:grayscale-0 duration-300 ease-in-linear hover:scale-105 max-w-xs mx-auto'
              src={finnmark}
              alt="Picture of the author"
            />
          </figure>
      </div>
      <div className="col-span-6 md:col-span-3">
          <figure
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="200"
            data-sal-easing="ease-out-back"
          >
            <Image
              className='grayscale hover:grayscale-0 duration-300 ease-in-linear hover:scale-105 max-w-xs mx-auto'
              src={laredoute}
              alt="Picture of the author"
            />
          </figure>
      </div>
      <div className="col-span-6 md:col-span-3">
          <figure
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="200"
            data-sal-easing="ease-out-back"
          >
            <Image
              className='grayscale hover:grayscale-0 duration-300 ease-in-linear hover:scale-105 max-w-xs mx-auto'
              src={lvmh}
              alt="Picture of the author"
            />
          </figure>
      </div>
      <div className="col-span-6 md:col-span-3">
          <figure
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-duration="200"
            data-sal-easing="ease-out-back"
          >
            <Image
              className='grayscale hover:grayscale-0 duration-300 ease-in-linear hover:scale-105 max-w-xs mx-auto'
              src={mec}
              alt="Picture of the author"
            />
          </figure>
      </div>
      <div className="col-span-6 md:col-span-3">
          <figure
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="200"
            data-sal-easing="ease-out-back"
          >
            <Image
              className='grayscale hover:grayscale-0 duration-300 ease-in-linear hover:scale-105 max-w-xs mx-auto'
              src={npower}
              alt="Picture of the author"
            />
          </figure>
      </div>
      <div className="col-span-6 md:col-span-3">
          <figure
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="200"
            data-sal-easing="ease-out-back"
          >
            <Image
              className='grayscale hover:grayscale-0 duration-300 ease-in-linear hover:scale-105 max-w-xs mx-auto'
              src={travelopia}
              alt="Picture of the author"
            />
          </figure>
      </div>
    </div>
    <div className="grid grid-cols-12 pt-20">
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
  {/* END - Freelance Projects */}
  </>
  )
}
