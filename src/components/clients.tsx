import Image from 'next/image'

// Images
import beis from '../../public/images/clients/beis.webp'
import costcutter from '../../public/images/clients/costcutter.webp'
import finnmark from '../../public/images/clients/finnmark.webp'
import laredoute from '../../public/images/clients/laredoute.webp'
import lvmh from '../../public/images/clients/lvmh.webp'
import mec from '../../public/images/clients/mec.webp'
import npower from '../../public/images/clients/npower.webp'
import travelopia from '../../public/images/clients/travelopia.webp'

export default function Clients() {
  return (
    <section className="container mx-auto px-6 max-w-7xl py-20 md:py-40">
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
      </section>
  )
}
