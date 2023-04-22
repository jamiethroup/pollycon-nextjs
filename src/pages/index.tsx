import React, {useState} from 'react';
import Image from 'next/image'
import sal from 'sal.js'

// Components
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Clients from '@/components/clients'
import About from '@/components/about'
import EmailForm from '@/components/emailForm'

export default function Home() {
  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);
  sal();
  return (
  <>
  <Hero/>
  <Projects/>
  <Clients/>
  <About />
  <EmailForm />
  </>
  )
}
