import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Products() {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 79.99,
      image: '🎧',
      description: 'Premium sound quality with noise cancellation'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      image: '⌚',
      description: 'Track your fitness and stay connected'
    },
    {
      id: 3,
      name: 'Laptop Backpack',
      price: 49.99,
      image: '🎒',
      description: 'Durable and spacious for all your needs'
    },
    {
      id: 4,
      name: 'Wireless Mouse',
      price: 29.99,
      image: '🖱️',
      description: 'Ergonomic design with precision tracking'
    },
    {
      id: 5,
      name: 'USB-C Hub',
      price: 39.99,
      image: '🔌',
      description: 'Expand your connectivity options'
    },
    {
      id: 6,
      name: 'Portable Charger',
      price: 34.99,
      image: '🔋',
      description: 'Keep your devices powered on the go'
    }
  ]

  return (
    <section id="products" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Featured Products</h2>
        <Row>
          {products.map(product => (
            <Col key={product.id} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <div className="display-1 mb-3">{product.image}</div>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="text-muted">{product.description}</Card.Text>
                  <Card.Text className="fw-bold fs-5">${product.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Products
