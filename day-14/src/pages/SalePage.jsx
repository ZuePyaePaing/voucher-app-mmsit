import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'

const SalePage = () => {
  return (
    <section className="w-full min-h-screen">
      <Container>
        <Breadcrumb currentPageTitle={'Sale Page'}/>
      </Container>
    </section>
  )
}

export default SalePage