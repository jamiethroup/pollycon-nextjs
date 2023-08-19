import Image from 'next/image'
import Link from 'next/link'
// Images
import blackAxeTattoo from '../../public/images/blackaxetattoo.png'
import louLouImages from '../../public/images/loulouimages.webp'
import kinLondon from '../../public/images/kinlondon.webp'

const projects = [
  {
    subtitle: 'Black Axe Tattoo',
    class: 'py-0 bg-slate-800 mb-6',
    title: 'Birmingham Based Tattoo Studio',
    url: 'https://blackaxetattoo.com/',
    image: blackAxeTattoo,
    tags: "Design, Development, SEO"
  },
  {
    subtitle: 'Lou Lou Images',
    class: 'py-0 bg-teal-800 mb-6',
    title: 'Milton Keynes Freelance Photographer',
    url: 'https://loulouimages.co.uk/',
    image: louLouImages,
    tags: "Design, Development"
  },
  {
    subtitle: 'KIN London',
    class: 'py-0 bg-teal-800 mb-6',
    title: 'Events Management in London',
    url: 'https://kinlondon.co.uk/',
    image: kinLondon,
    tags: "Email Development, Automation"
  }
];

export default function Projects() {
  return (
    <section className="container mx-auto px-6 max-w-7xl pt-0 md:pt-20 mb-10 md:pb-20">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-start-2 md:col-end-12 hidden">
          <h5  
          className='font-outfit uppercase font-medium  tracking-wide'
          >
            How I help
          </h5>
          <h3 
          className='text-gray-800 text-4xl md:text-5xl mt-4 max-w-5xl my-20'
          >
            Throughout my career, I&rsquo;ve honed my skills to allow me to create interactive web experiences that are both modern and focused on speed.
          </h3>
        </div>
      </div>
      <div className="grid px-4 grid-cols-12 gap-4 ">
        {projects.map(({ subtitle, class: projectClass, title, image, tags, url }, i) => (
          <div
            key={i}
            className={i % 2 === 0 ? 'col-span-12 lg:col-span-6 lg:pr-10 hover:-translate-y-4 duration-300' : 'col-span-12 lg:col-span-6 pt-10 lg:pt-28 lg:pl-10 hover:-translate-y-4 duration-300'}
          >
            <div className="image">
              <figure
                className={projectClass}
              >
              <Link target='_blank' href={url}>
                <Image
                  className='shadow-md shadow-gray-800 aspect-square duration-300 object-cover'
                  src={image}
                  alt={subtitle} // Add descriptive alt text here
                />
              </Link>
              </figure>
            </div>
            <div
              className="text"
            >
              <h4
                className='text-2xl font-outfit font-semibold text-neutral-800'
                dangerouslySetInnerHTML={{__html: subtitle}}
              ></h4>
              <h3 
                className='font-outfit text-base leading-normal mt-4 max-w-lg font-light text-neutral-800'
                dangerouslySetInnerHTML={{__html: title}}>
              </h3>
              <span className='mt-6 block'>
              {tags.split(",").map((tag,i) => (
                <span key={i} className='rounded-pill'>{tag}</span>
              ))}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
