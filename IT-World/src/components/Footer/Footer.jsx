import "./Footer.css";
import Container from 'react-bootstrap/Container';

function Footer () {
    return(
        <Container className="container-footer">
            <div>
                <ul className="list-footer p-3 d-flex justify-content-around">
                    <li className="list-text-footer text-primary">
                        <a href="#contact">Contact us</a></li>
                    <li className="list-text-footer text-primary">
                        <a href="#enterprice">Our enterprice</a></li>
                    <li className="list-text-footer text-primary">
                        <a href="#services">Our services</a></li>
                    <li className="list-text-footer text-primary">
                        <a href="#sales">Our sales</a></li>
                </ul>
                <ul className="end-footer p-2 d-flex justify-content-center text-primary">
                    <h6>© 2023 IT World. All rights reserved.</h6>
                </ul>
            </div>
        </Container>
    )
}
export default Footer;