export default function Header() {
  return (
  <section className="waveWrapper waveAnimation">
    <div className="w-full h-full flex items-center justify-center relative z-30">
      <div className="container px-6 mt-32 mb-40 md:mt-0 md:mb-0 max-w-7xl mx-auto">
      <h2 
      className='mb-8'
      data-sal="slide-up"
      data-sal-delay="200"
      data-sal-duration="500"
      data-sal-easing="ease-out-back"
      >
        Hi, I&rsquo;m Jamie<span className='animate-wave'>👋</span>
      </h2>
      <h3
      data-sal="slide-up"
      data-sal-delay="700"
      data-sal-duration="750"
      data-sal-easing="ease-out-back"
      >
        I’m a <span className="italic font-cormorant font-medium">shopify developer</span> who loves to create <span className="italic font-cormorant font-medium">pixel perfect websites</span> utilizing on the edge tools.
      </h3>
      <div
        data-sal="slide-up"
        data-sal-delay="1000"
        data-sal-duration="750"
        data-sal-easing="ease-out-back"
      >
      <a 
        href="/case-studies" 
        className="button mt-10"
      >
        View case studies
        <svg className='h-6 ml-2' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512">
          <path className='fill-white' d="m322.7 128.4 100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z"/>
        </svg>
        </a>
      </div>
      </div>
    </div>
    <div className="waveEl wave-top">
      <div className="wave wave-top__el"></div>
    </div>
    <div className="waveEl wave-middle">
      <div className="wave wave-middle__el"></div>
    </div>
    <div className="waveEl wave-bottom">
      <div className="wave wave-bottom__el"></div>
    </div>
  </section>
  )
}