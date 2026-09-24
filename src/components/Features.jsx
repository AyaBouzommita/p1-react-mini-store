import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Features() {
  const features = [
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'On orders over $50'
    },
    {
      icon: '🔄',
      title: 'Easy Returns',
      description: '30-day return policy'
    },
    {
      icon: '🔒',
      title: 'Secure Payment',
      description: '100% secure checkout'
    },
    {
      icon: '💬',
      title: '24/7 Support',
      description: 'Dedicated support team'
    }
  ]

  return (
    <section id="features" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Why Choose Us</h2>
        <Row>
          {features.map((feature, index) => (
            <Col key={index} md={3} className="text-center mb-4">
              <div className="display-3 mb-3">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p className="text-muted">{feature.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Features
