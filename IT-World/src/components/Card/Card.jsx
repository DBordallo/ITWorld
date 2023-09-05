import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css';
import Portatil from '../../assets/img-cards/Portatil.jpg';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Cards() {
  const [ articles, setArticles] = useState ([])
  useEffect(()=>{
    fetch("http://localhost:3000/articles")
    .then((response)=> response.json())
    .then((data)=> setArticles(data))
    .catch((error)=> console.error("Error",error))
  },[])

  return (
    <div>
      {articles.map((art) => (
        <Card className="card" style={{ width: '18rem' }} key={art.id}>
          <Card.Img className="card-img" variant="top" src={Portatil} />
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
      ))}
    </div>
  )}
    
    export default Cards;