import React from 'react';

// Components
import Introduction from '@/components/introduction'
import Jobs from '@/components/jobs'
import Header from '@/components/header'
import Clients from '@/components/clients'



const componentImages = [
  {
    src: '/images/coding.webp',
    alt: 'Jamie Coding',
  },
];

export default function Home() {
  return (
  <>
    <Header />
    <section className="relative">
      <Introduction />
      <Jobs />
      <Clients />
    </section>
  </>
  )
}
