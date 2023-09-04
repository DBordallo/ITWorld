import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css';
import Portatil from '../src/assets/img-cards/Portatil.jpg';

function Cards() {
    return (
      <Card className="card" style={{ width: '18rem' }}>
        <Card.Img className="card-img" variant="top" src={Portatil} />
        <Card.Body>
          <Card.Title className="card-title">Ordenador Portatil</Card.Title>
          <Card.Text className="card-text">
            Breve descripción del producto
          </Card.Text>
          <Button className="button-primary" variant="primary">
            Entrar
          </Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default Cards;