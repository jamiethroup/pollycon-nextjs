import Image from 'next/image';

// Images
import beis from '../../public/images/clients/beis.svg'
import costcutter from '../../public/images/clients/costcutter.svg'
import laredoute from '../../public/images/clients/laredoute.svg'
import lvmh from '../../public/images/clients/lvmh.svg'
import vbb from '../../public/images/clients/vbb.svg'
import npower from '../../public/images/clients/npower.svg'
import dagsmejan from '../../public/images/clients/dagsmejan.svg'
import triangl from '../../public/images/clients/triangl.svg'
import repossi from '../../public/images/clients/repossi.svg'
import moynat from '../../public/images/clients/moynat.svg'
import loulou from '../../public/images/clients/loulou.svg'
import dubarry from '../../public/images/clients/dubarry.svg'

// Create array of image names
const imageNames = [
  beis,
  costcutter,
  laredoute,
  lvmh,
  vbb,
  npower,
  triangl,
  dagsmejan,
  repossi,
  moynat,
  loulou,
  dubarry
  // Dagsmejan Little Women Triangl Florence By Mills HERA
];

function getRandomNumberUnder1000() {
  return Math.floor(Math.random() * 1000);
}

export default function Clients() {
  return (
    <section className="snap-start relative lg:min-h-screen bg-white items-center justify-center grid grid-cols-12 px-0 lg:gap-5 py-5 lg:pt-20 2xl:pt-40">
    <div className="col-span-12 lg:col-start-2 lg:col-end-12 text-left px-5 lg:px-0 max-w-3xl"
            data-sal="slide-up"
            data-sal-delay="600"
            data-sal-easing="ease-out-back">
      <h2 className='text-[#1E293B] text-4xl font-dm_sans font-bold mb-5 lg:mb-10 sal-animate'>
        What I&lsquo;ve worked on...
      </h2>
      <h5 
      className='font-dm_sans leading-relaxed mx-auto font-light text-black mb-10 tracking-wide'
      >
        I&lsquo;ve had the pleasure of working with some amazing clients over the years. Here are just a few of them...
      </h5>
    </div>
    <div className="col-span-12 grid grid-cols-3 gap-1">
      {imageNames.map((imageName, index) => (
        <figure
          className='col-span-1 bg-neutral-50 py-20 px-10 flex items-center h-full justify-center'
          data-sal="slide-up"
          data-sal-delay={getRandomNumberUnder1000()}
          data-sal-speed={getRandomNumberUnder1000()}
          data-sal-easing="ease-out-back"
          key={`${imageName}-${index}`}
        >
          <Image
            className='grayscale max-h-20  xl:max-h-32 h-full w-auto hover:grayscale hover:scale-110 duration-300 ease-in-linear hover:scale-10 mx-auto'
            src={imageName}
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </figure>
      ))}
    </div>
    </section>
  )
}
