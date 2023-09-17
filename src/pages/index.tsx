import React from 'react';
import Introduction from '@/components/introduction'
import Jobs from '@/components/jobs'
import Header from '@/components/header'
import Clients from '@/components/clients'

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
