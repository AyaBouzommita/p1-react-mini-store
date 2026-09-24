import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Main() {
  return (
    <main className="main-content">
      <h1 className="products-title">Nos Produits</h1>
      <div className='card-container'>
         <Card className="product-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/produits/robe.jpg" />
      <Card.Body>
        <Card.Title>Robe Élégante</Card.Title>
        <Card.Text>
          89.99DT </Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
    <Card className="product-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/produits/lunette.jpg" />
      <Card.Body>
        <Card.Title>Lunettes de Soleil</Card.Title>
        <Card.Text>
        129.99DT
        </Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
    <Card className="product-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/produits/sac.jpg" />
      <Card.Body>
        <Card.Title>Sac à Main</Card.Title>
        <Card.Text>
          149.99DT
        </Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
    <Card className="product-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/produits/ballerine.jpg" />
      <Card.Body>
        <Card.Title>Ballerines</Card.Title>
        <Card.Text>
          59.99 DT
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
