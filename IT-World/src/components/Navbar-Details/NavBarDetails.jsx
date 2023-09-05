import './NavBarDetails.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from'../../assets/images/logoImg.png'
import { Link } from 'react-router-dom';



function NavBarDetails() {
  return (
            <>
          <Navbar data-bs-theme="dark">
            <Container>
              <Navbar.Brand><Link to="/"><img 
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />IT-World</Link></Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link><Link to="/form">Crear publicación</Link></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br/>
    
          
        </>
      );
    }
    

export default NavBarDetails;