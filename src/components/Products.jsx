import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Products() {
  const products = [
    {
      id: 1,
      name: 'Summer Dress',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
      category: 'Women'
    },
    {
      id: 2,
      name: 'Beach Hat',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=400&h=500&fit=crop',
      category: 'Accessories'
    },
    {
      id: 3,
      name: 'Sunglasses',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=500&fit=crop',
      category: 'Accessories'
    },
    {
      id: 4,
      name: 'Leather Backpack',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop',
      category: 'Bags'
    }
  ]

  return (
    <section id="products" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-2 fw-bold">Our Products</h2>
        <p className="text-center text-muted mb-5">Discover our latest collection</p>
        <Row>
          {products.map(product => (
            <Col key={product.id} md={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm product-card">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={product.image} 
                    alt={product.name}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <span className="position-absolute top-0 start-0 bg-primary text-white px-3 py-1 m-2 rounded">
                    {product.category}
                  </span>
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{product.name}</Card.Title>
                  <Card.Text className="text-primary fw-bold fs-5 mb-3">${product.price}</Card.Text>
                  <Button variant="dark" className="w-100">Add to Cart</Button>
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
