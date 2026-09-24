import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Header() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="/carousel/carousel1.jpg" className="d-block w-100" alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/carousel/carousel2.jpg" className="d-block w-100" alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/carousel/carousel3.jpg" className="d-block w-100" alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
  )
}

export default Header
