import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Main() {
  return (
    <main className="main-content">
      <h1 className="products-title">Nos Produits</h1>
      <div className='card-container'>
         <Card className="product-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" />
      <Card.Body>
        <Card.Title>Wireless Headphones</Card.Title>
        <Card.Text>
          50.00DT </Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
    <Card className="product-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop" />
      <Card.Body>
        <Card.Title>Smart Watch</Card.Title>
        <Card.Text>
        150.00DT
        </Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
    <Card className="product-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop" />
      <Card.Body>
        <Card.Title>Backpack</Card.Title>
        <Card.Text>
          30.00DT
        </Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
    <Card className="product-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop" />
      <Card.Body>
        <Card.Title>Sneakers</Card.Title>
        <Card.Text>
          80.00 DT
        </Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
      </div>
      <div className="shop-info">
        <h2>Merci pour votre visite</h2>
        <p>
          Vous pouvez nous contacter pour toute question concernant nos produits.
          Profitez de la livraison gratuite et d'un service simple et rapide.
        </p>
      </div>
    </main>
  )
}

export default Main
