export default function Header() {
  return (
    <>
      <section id="section-hero" className="pt-40 pb-0 md:pt-0 md:pb-0 md:h-screen flex items-center justify-center relative">
        <h2>
          <span
            className="inline-block"
          >
            Eat.
          </span>
          <span
            className="inline-block"
          >
            Sleep.
          </span>
          <span
            className="inline-block"
          >
            Code.
          </span>
          <span
            className="inline-block"
          >
            Repeat.
          </span>
        </h2>
        <a href="#" className="absolute w-full bottom-20 left-0 text-center">
          <div className="animate-bounce w-fit mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scale-150 mx-auto"><path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" /></svg>
          </div>
        </a>
      </section>
    </>
  )
}
