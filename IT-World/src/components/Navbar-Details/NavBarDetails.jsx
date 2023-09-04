import './NavBarDetails.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBarDetails() {
  return (
            <>
          <Navbar data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home"><img 
              alt=""
              src="IT-World/src/assets/images/logoImg.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br/>
    
          
        </>
      );
    }
    

export default NavBarDetails;