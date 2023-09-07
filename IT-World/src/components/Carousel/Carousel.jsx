import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item interval={3500}>
        <img
          src='/src/assets/img-carousel/img1.png'
          alt='img1'
          className='carousel-img' // Aplicar la clase de estilo personalizado
        />
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <img
          src='/src/assets/img-carousel/img2.png'
          alt='img2'
          className='carousel-img' // Aplicar la clase de estilo personalizado
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src='/src/assets/img-carousel/img3.jpg'
          alt='img3'
          className='carousel-img' // Aplicar la clase de estilo personalizado
        />
   
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;