import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Cards() {
  const [ articles, setArticles] = useState ([])
  useEffect(()=>{
    fetch("http://localhost:3000/articles")
    .then((response)=> response.json())
    .then((data)=> setArticles(data))
    .catch((error)=> console.error("Error",error))
  },[])

  return (
    <Container fluid="md">
      <Row>
      {articles.map((art) => (
        <Col key={art.id} xs={12} md={4}>
        <Card className="card" style={{ width: '18rem' }} key={art.id}>
          <Card.Img className="card-img" variant="top" src={art.imageData} />
          <Card.Body>
            <Card.Title className="card-title">{art.title}</Card.Title>
            <Card.Text className="card-text">{art.description}</Card.Text>
            <Card.Text className="card-quantity">{art.quantity}</Card.Text>
            <Card.Text className="card-price">{art.price}€</Card.Text>
            <Button className="button-primary" variant="primary">
              <Link to={`/details/${art.id}`}>
                Entrar
              </Link>
            </Button>
          </Card.Body>
        </Card>
        </Col>
      ))}
      </Row>
    </Container>
  )}
    
    export default Cards;