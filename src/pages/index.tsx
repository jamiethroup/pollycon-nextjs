import React from 'react';

// Components
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Clients from '@/components/clients'
import About from '@/components/about'
// import EmailForm from '@/components/emailForm'


export default function Home() {
  return (
  <>
    <Hero/>
    <Projects/>
    <Clients/>
    <About />
  </>
  )
}
