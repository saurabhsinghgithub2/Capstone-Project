import React from 'react'
import Heading from '../Sections/Heading'
import Specials from '../Sections/Specials'
import Testimonials from '../Sections/Testimonials'
import About from '../Sections/About'

const Homepage = () => {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  )
}

export default Homepage