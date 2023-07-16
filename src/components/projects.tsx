import Image from 'next/image'
// Images
import blackAxeTattoo from '../../public/images/blackaxetattoo.png'
import louLouImages from '../../public/images/loulouimages.webp'

const projects = [
  {
    subtitle: 'Black Axe Tattoo',
    class: 'py-0 bg-slate-800 mb-6',
    title: 'Birmingham Based Tattoo Studio',
    image: blackAxeTattoo,
    tags: "Design, Development, SEO"
  },
  {
    subtitle: 'Lou Lou Images',
    class: 'py-0 bg-teal-800 mb-6',
    title: 'Milton Keynes Freelance Photographer',
    image: louLouImages,
    tags: "Design, Development"
  },
];

export default function Projects() {
  return (
    <section className="container mx-auto px-6 max-w-7xl pt-0 mb-10 md:pt-40 md:pb-20 bg-emerald-600">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-start-2 md:col-end-12">
          <h5  
          className='font-outfit uppercase font-medium  tracking-wide'
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="500"
          data-sal-easing="ease-out-back"
          >
            How I help
          </h5>
          <h3 
          className='text-gray-800 text-4xl md:text-5xl mt-4 max-w-5xl my-20'
          data-sal="slide-up"
          data-sal-delay="700"
          data-sal-duration="500"
          data-sal-easing="ease-out-back"
          >
            Throughout my career, I&rsquo;ve honed my skills to allow me to create interactive web experiences that are both modern and focused on speed.
          </h3>
        </div>
      </div>
      <div className="grid px-4 grid-cols-12 gap-4">
      {projects.map((project,i) => (
        <div key={i} className={i % 2 == 0 ? 'col-span-6 pr-10 hover:-translate-y-4 duration-300' : 'col-span-6 pt-28 pl-10 hover:-translate-y-4 duration-300' }>
          <div className="image">
            <figure
              className={project.class}
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-duration="500"
              data-sal-easing="ease-out-back"
            >
              <Image
                className='shadow-md shadow-gray-800 aspect-square duration-300 object-cover'
                src={project.image}
                alt={project.subtitle}
              />
            </figure>
          </div>
            <div
              className="text"
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-duration="500"
              data-sal-easing="ease-out-back"
            >
              <h4
                className='text-2xl font-outfit font-bold text-neutral-800'
                dangerouslySetInnerHTML={{__html: project.subtitle}}
              ></h4>
              <h3 
                className='font-outfit text-base leading-normal mt-4 max-w-lg font-light text-neutral-800'
                dangerouslySetInnerHTML={{__html: project.title}}>
              </h3>
              <span className='mt-6 block'>
              {project.tags.split(",").map((tag,i) => (
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
