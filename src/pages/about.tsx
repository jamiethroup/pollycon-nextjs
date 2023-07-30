import React from 'react';
import Image from 'next/image';

const jobs = [
  {
    date: '2022 - Present',
    type: 'Remote',
    title: 'Shopify Developer',
    company: 'Brave The Skies / Dark Matter Commerce',
    description: 'As a Shopify Developer, I play a pivotal role in crafting and maintaining exceptional e-commerce websites on the Shopify platform. Leveraging my expertise, I recently rebuilt the framework, infusing the team with my valuable experience. I collaborate closely with designers and project managers to translate concepts into fully functional and visually appealing online stores using Liquid, HTML, CSS, and JavaScript. My day-to-day activities involve customizing themes, implementing new features, and optimizing site performance.'
  },
  {
    date: '2021 - 2022',
    type: 'Remote',
    title: 'Developer / Senior Developer',
    company: 'Fost / IDHL Group',
    description: 'As a Senior Shopify Project Developer, my day-to-day activities revolve around leading and overseeing the development of complex e-commerce projects on the Shopify platform. I collaborate closely with cross-functional teams, including designers, project managers, and stakeholders, to gather project requirements and devise effective solutions. Utilizing my extensive expertise in Liquid, HTML, CSS, and JavaScript, I customize and optimize Shopify themes to deliver outstanding user experiences and maximize conversions.'
  },
  {
    date: '2017 - 2021',
    type: 'West Yorkshire, UK',
    title: 'Developer / Senior Developer',
    company: 'Squashed Pixel',
    description: 'As a Shopify Developer, my day-to-day activities involve creating and optimizing e-commerce websites on the Shopify platform. Starting as a Junior, I have grown into a Senior role, continually learning and honing my skills through hands-on experience here. I collaborate with clients and design teams to understand their business needs, customize themes using Liquid, HTML, and CSS, and integrate apps to enhance functionality. Daily tasks include setting up product pages, managing inventory, and ensuring a seamless checkout process. Over time, Ive mastered Shopifys API to build custom solutions and have become adept at troubleshooting and resolving technical issues efficiently. This journey has been enriching, and my dedication to staying updated with the latest Shopify advancements enables me to deliver exceptional e-commerce solutions for our clients.'
  },
  {
    date: '2016 - 2017',
    type: 'West Yorkshire, UK',
    title: 'Wordpress Developer',
    company: 'LITTLE Agency',
    description: 'As a WordPress Developer with server management responsibilities, my day-to-day activities are a dynamic blend of web development and server administration. I specialize in creating and customizing WordPress websites, ensuring seamless functionality, and captivating user experiences. I work closely with clients and design teams to understand project requirements, implement responsive designs, and optimize site performance using HTML, CSS, PHP, and JavaScript. Additionally, I manage server configurations, monitor performance, and address security issues to maintain a stable and secure hosting environment.'
  },
  {
    date: '2015 - 2016',
    type: 'West Yorkshire, UK',
    title: 'Juinor Frontend Developer',
    company: 'Enjoy Digital',
    description: 'As a Junior Front End Developer, my day-to-day activities focus on crafting and enhancing front end templates for Umbraco, a versatile content management system. I collaborate closely with the design and development teams to convert visual designs into responsive and user-friendly web templates using HTML, CSS, and JavaScript. '
  },
  {
    date: '2013 - 2015',
    type: 'West Yorkshire, UK',
    title: 'Email Developer',
    company: 'Force24',
    description: 'As a Junior Email Developer, I played a critical role in shaping captivating and effective email campaigns for our organization. Working closely with the talented marketing and design teams, I turned their creative visions into reality by coding and implementing eye-catching email templates. My focus revolved around ensuring seamless rendering across diverse email clients and devices, delivering an exceptional user experience. Rigorous testing of email templates was a crucial part of my job, and I took pride in ensuring that our emails displayed flawlessly across various platforms.'
  }
];


export default function About() {
  return (
  <>
  <section className="container mx-auto px-6 max-w-7xl pt-0 mb-10 md:pt-40 md:pb-20">
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-start-2 md:col-end-12 my-40">
        <h5  
        className='font-outfit uppercase font-bold  tracking-wide'
        >
          How I help
        </h5>
        <h3 
        className='text-gray-800 text-4xl md:text-5xl md:leading-tight font-bold max-w-4xl mt-6'
        >
          In 2023, I&rsquo;ve celebrated my ten years in the development, six of which have been spent working with Shopify.
        </h3>
        <p 
        className='text-gray-800 font-outfit text-base max-w-3xl font-medium mt-6'
        >
          I&rsquo;ve worked with a wide range of clients, from small businesses to large corporations, and I&rsquo;ve been lucky enough to work with some of the best agencies in the UK.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-12 lg:gap-10 items-center px-4">
      <div className="col-span-12 lg:col-span-3">
        <Image src="/images/spaceman-jamie.webp" width="56" height="56" alt="me" />
      </div>
      <div className="col-span-12 lg:col-span-5">
        <Image src="/images/jamie-family.webp" className='hidden md:block' width="56" height="56" alt="me" />
        </div>
      <div className="col-span-12 lg:col-span-4">
        <Image src="/images/jamie-patriots.webp" className='hidden md:block' width="56" height="56" alt="me" />
      </div>
    </div>
    <div className="grid grid-cols-12 lg:gap-10 mt-40 px-4">
      <div className="col-span-12 lg:col-span-5">
        <div className="sticky top-40">
        <h3 className='text-gray-700 uppercase font-bold'>Experience</h3>
        <p className='text-gray-700 font-outfit text-lg leading-loose font-light mt-5'>
          I started off my career as an email developer, creating emails for the likes of nPower and Park Dean Resorts. I then moved into the agency world, working with a wide range of clients such as the NHS, the University of Leeds, and LVMH.
        </p>
      <a 
        href="https://drive.google.com/file/d/1916JT7S5UEFp_t-igMjx1GJ-N8WXcvpr/view?usp=drive_link" 
        className="about-button button rounded-full text-gray-700 mr-4 border-gray-700 mt-10 hover:bg-gray-700 hover:text-white group"
      >
        Download CV
        <svg className='h-6 ml-2' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512">
          <path className='fill-gray-700 group-hover:fill-white' d="m322.7 128.4 100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z"/>
        </svg>
        </a>
      <a 
        href="https://www.linkedin.com/in/jamiethroup/" 
        className="about-button button text-gray-700 rounded-full border-gray-700 mt-4 lg:mt-10 hover:bg-gray-700 hover:text-white group"
      >
        Visit LinkedIn
        <svg className='h-6 ml-2' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512">
          <path className='fill-gray-700 group-hover:fill-white' d="m322.7 128.4 100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z"/>
        </svg>
        </a>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7 mt-10 lg:mt-0">
        {jobs.map((job,i) => (
        <div key={i} className="job p-10 border rounded-md hover:rounded-2xl border-neutral-200 hover:bg-neutral-50 transition-all duration-150 mb-10">
          <div className="flex items-center justify-start mb-4">
            <h5 className="job__date  font-outfit font-light">{job.date}</h5>
            <div className="job__type text-gray-700 dark:text-white font-outfit font-light">{job.type}</div>
          </div>
          <div className="job__meta">
            <h4 className="job__company">{job.company}</h4>
            <h5 className="job__title">{job.title}</h5>
            <p className="job__description">{job.description}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
    </section>
    {/* <EmailForm /> */}
  </>
  )
}
