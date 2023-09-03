import Image from 'next/image';

// Images
import beis from '../../public/images/clients/beis.svg'
import costcutter from '../../public/images/clients/costcutter.svg'
import laredoute from '../../public/images/clients/laredoute.svg'
import lvmh from '../../public/images/clients/lvmh.svg'
import vbb from '../../public/images/clients/vbb.svg'
import npower from '../../public/images/clients/npower.svg'

// Create array of image names
const imageNames = [
  beis,
  costcutter,
  laredoute,
  lvmh,
  vbb,
  npower,
];

function getRandomNumberUnder1000() {
  return Math.floor(Math.random() * 1000);
}

export default function Clients() {
  return (
    <section className=" bg-emerald-600">
    <div className="container mx-auto px-6 max-w-7xl pt-0 mb-10 pb-10">
      <div className='px-6 py-20 md:px-0 grid md:grid-cols-12 md:gap-10'>
        <div className="col-span-12 text-center">
          <h5 
          className='font-dm_sans max-w-3xl leading-relaxed mx-auto font-light text-white mb-10 tracking-wide'
          >
          Over the last ten years, I&rsquo;ve been lucky enough to work with some of the best agencies in the UK. Here&rsquo;s some of the clients I&rsquo;ve worked with while at those agencies...
          </h5>
        </div>
        <div className="col-span-12 grid grid-cols-3 lg:flex gap-10 justify-evenly">
          {imageNames.map((imageName, index) => (
            <figure
              className='col-span-1 flex items-center h-full justify-center'
              key={`${imageName}-${index}`}
            >
              <Image
                className='grayscale max-h-20 xl:max-h-32 h-full w-auto hover:grayscale duration-300 ease-in-linear hover:scale-10 mx-auto'
                src={imageName}
                alt="Picture of the author"
                width={200}
                height={200}
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}
