import React, { useState } from 'react'
import { Container, Button, Row, Col, Carousel } from 'react-bootstrap'

function Hero() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  const carouselItems = [
    {
      title: 'SUMMER COLLECTION',
      subtitle: 'Discover the latest trends for the season',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop',
      alt: 'Summer fashion'
    },
    {
      title: 'BEST DEALS',
      subtitle: 'Up to 50% off on selected items',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      alt: 'Best deals'
    },
    {
      title: 'NEW ARRIVALS',
      subtitle: 'Be the first to shop new styles',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
      alt: 'New arrivals'
    }
  ]

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="hero-carousel">
      {carouselItems.map((item, idx) => (
        <Carousel.Item key={idx}>
          <div 
            className="hero-slide d-flex align-items-center"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '600px',
              position: 'relative'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }}
            />
            <Container className="position-relative z-1">
              <Row className="align-items-center">
                <Col md={6}>
                  <h1 className="display-3 fw-bold text-white mb-3">{item.title}</h1>
                  <p className="lead text-white mb-4 fs-4">{item.subtitle}</p>
                  <Button variant="light" size="lg" className="me-2 fw-bold">Shop Now</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Hero
