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
  // Dagsmejan 
  // Little Women 
  // Triangl 
  // Florence By Mills 
  // HERA
];

const locale = {
  title: "What I've worked on...",
  subtitle: "I've had the pleasure of working with some amazing clients over the years. Here are just a few of them...",
}

function getRandomNumberUnder1000() {
  return Math.floor(Math.random() * 1000);
}

export default function Clients() {
  return (
    <section className="clients-section">
    <div className="clients-section__content">
      <h2
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-easing="ease-out-back"
      >
        {locale.title}
      </h2>
      <h5
        data-sal="slide-up"
        data-sal-delay="800"
        data-sal-easing="ease-out-back"
      >
        {locale.subtitle}
      </h5>
    </div>
    <div className="clients-section__grid">
      {imageNames.map((imageName, index) => (
        <figure
          data-sal="slide-up"
          data-sal-delay={getRandomNumberUnder1000()}
          data-sal-speed={getRandomNumberUnder1000()}
          data-sal-easing="ease-out-back"
          key={`${imageName}-${index}`}
        >
          <Image
            src={imageName}
            alt="Logo for a client I've worked with"
            width={200}
            height={200}
          />
        </figure>
      ))}
    </div>
    </section>
  )
}
