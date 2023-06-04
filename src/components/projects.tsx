import Image from 'next/image'
import sal from 'sal.js'
// Images
import blackAxeTattoo from '../../public/images/blackaxetattoo.png'
import louLouImages from '../../public/images/loulouimages.png'

const projects = [
  {
    subtitle: 'Black Axe Tattoo',
    class: 'py-4 md:p-14 bg-slate-800 mb-6',
    title: 'I was approached by Victoria to create a website that would showcase her work and allow her to take bookings online. The website needed to be easy to use and allow her to update the content herself. I created a custom WordPress theme that allowed her to do just that. The website is built using the latest web technologies and is fully responsive.',
    image: blackAxeTattoo,
    tags: "Design,Development"
  },
  {
    subtitle: 'Lou Lou Images',
    class: 'py-4 md:p-14 bg-teal-800 mb-6',
    title: 'I was approach by Chloe to produce to this website to showcase her photography work. The website needed to be easy to use and allow her to update the content herself. ',
    image: louLouImages,
    tags: "Design,Development"
  },
];

export default function Projects() {
  return (
    <section className="container mx-auto px-6 max-w-7xl pt-0 mb-10 md:pt-40 md:pb-20">
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
      {projects.map((project,i) => (
        
        <div className="project-block px-6 md:px-0 py-10 md:py-40 flex flex-col md:grid md:grid-cols-12 md:gap-10" key={i}>
        <div className=" image">
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
          <span>
          {project.tags.split(",").map((tag,i) => (
            <span key={i} className='rounded-pill'>{tag}</span>
          ))}
          </span>
            <h4
              dangerouslySetInnerHTML={{__html: project.subtitle}}
            ></h4>
            <h3 
              className='font-outfit text-base max-w-sm leading-normal mt-4 font-light text-neutral-500'
              dangerouslySetInnerHTML={{__html: project.title}}>
            </h3>
          </div>
        </div>
      ))}
    </section>
  )
}
