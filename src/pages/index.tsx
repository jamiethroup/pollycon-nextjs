import React from 'react';
import Introduction from '@/components/introduction'
import Jobs from '@/components/jobs'
import Header from '@/components/header'
import Clients from '@/components/clients'
import Platforms from '@/components/platforms'

export default function Home() {
  return (
  <>
    <Header />
    <section className="relative snap-mandatory scroll-smooth snap-x">
      <Introduction />
      <Jobs />
      <Clients />
    </section>
  </>
  )
}
