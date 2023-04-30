import Image from 'next/image'

// Images
import blackAxeTattoo from '../../public/images/blackaxetattoo.png'
import louLouImages from '../../public/images/loulouimages.png'

const projects = [
  {
    subtitle: 'Black Axe Tattoo Studio',
    class: 'py-4 md:p-14 bg-slate-800 mb-6',
    title: 'Creating an <span class="font-ebgaramond font-light text-2xl md:text-6xl italic">unique design</span> for a Birmingham based studio',
    image: blackAxeTattoo,
  },
  {
    subtitle: 'Lou Lou Images',
    class: 'py-4 md:p-14 bg-teal-800 mb-6',
    title: 'Creating an <span class="font-ebgaramond font-light text-2xl md:text-6xl italic">unique design</span> for a Birmingham based studio',
    image: louLouImages,
  },
];

export default function Projects() {
  return (
    <section className="container mx-auto px-6 max-w-7xl pt-0 mb-10 md:py-40">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
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
          className='text-gray-800 text-2xl md:text-5xl mt-4 max-w-5xl mb-20'
          data-sal="slide-up"
          data-sal-delay="700"
          data-sal-duration="500"
          data-sal-easing="ease-out-back"
          >
            Throughout my career, I&rsquo;ve honed my skills to allow me to create <span className='font-ebgaramond font-light text-2xl md:text-6xl italic'>interactive web experiences</span> that are both modern and focused on <span className='font-ebgaramond font-light text-2xl md:text-6xl italic'>speed</span>
          </h3>
        </div>
      </div>
      {projects.map((project,i) => (
        <div className="project-block px-6 md:px-0 py-10 md:py-20 flex flex-col md:grid md:grid-cols-12 md:gap-10" key={i}>
          <div
            className="col-span-12 md:col-span-5 flex items-start justify-center flex-col"
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
          <div className=" col-span-12 md:col-span-7">
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
    </section>
  )
}
