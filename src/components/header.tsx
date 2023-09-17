export default function Header() {
  return (
    <>
      <header className="bg-[#1E293B] relative z-50">
        <div className="max-h-screen sticky top-0 left-0 h-full w-full text-white flex items-start justify-between p-10 flex-col">
          <div>
            <svg fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" className="w-10" clipRule="evenodd" viewBox="0 0 35 50"><path fill="#C3D4F0" fillRule="nonzero" d="M28.761 19.633c-1.5 1.82-3.607 2.743-6.26 2.743H7.564v23.042H3.75V18.61h18.113c1.585 0 2.973-.618 3.91-1.74.79-.948 1.226-2.219 1.226-3.578 0-2.786-1.921-5.668-5.136-5.668H3.75V3.75h18.752c5.746 0 8.363 4.925 8.363 9.5 0 2.47-.747 4.737-2.104 6.383m-17.448 6.494h3.25v19.29h-3.25v-19.29ZM22.502 0H0v11.376h21.863c1.01 0 1.386 1.176 1.386 1.917 0 .476-.13.905-.356 1.176-.14.168-.4.392-1.03.392H0v34.2h18.314V26.127h4.188c3.772 0 6.937-1.421 9.153-4.11 1.91-2.314 2.96-5.428 2.96-8.767C34.615 6.666 30.454 0 22.502 0" className="fill-[#96BF48]" /></svg>

          </div>
          <div className="max-w-3xl">
            <h1 className="font-dm_sans text-4xl leading-tight pr-10 lg:pr-20 font-bold text-[#96BF48]">Hello, I&rsquo;m Jamie, an Experienced Shopify Developer based in West Yorkshire 🐮</h1>
            <p className="text-[#96BF48] mt-8 font-dm_sans">I should really fill this second line in...</p>
            <a className="border border-[#96BF48] text-[#96BF48] inline-flex text-base py-2 px-4 font-dm_sans font-semibold rounded-full mt-8" href="#contact">Let&rsquo;s work together</a>
            </div>
          <div className="text-[#C3D4F0] text-xs leading-6">
            Find me on <a className="underline" href="https://twitter.com/jamiethroup">X</a>, <a className="underline" href="https://github.com/jamiethroup">Github</a> and <a className="underline" href="https://www.linkedin.com/in/jamiethroup/">Linkedin</a><br></br>
            <a href="#" className="underline">Download</a> my Resume (PDF)

          </div>
        </div>
      </header>
    </>
  );
}