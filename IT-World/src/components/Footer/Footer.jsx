import "./Footer.css";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import facebookIcon from '../../assets/img-footer/Facebook1.png';
import instagramIcon from '../../assets/img-footer/Instagram1.png';
import tiktokIcon from '../../assets/img-footer/TikTok1.png';
import twitterIcon from '../../assets/img-footer/Twitter1.png';


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
                <ul className="social-icons p-2 d-flex justify-content-around">
                    <li className="social-icons-footer text-primary">
                        <a href="#facebook"><Image src={facebookIcon} alt="Facebook" className="social-icon"/></a></li>
                    <li><a href="#instagram"><Image src={instagramIcon} alt="Instagram" className="social-icon"/></a></li>
                    <li><a href="#tiktok"><Image src={tiktokIcon} alt="TikTok" className="social-icon"/></a></li>
                    <li><a href="#twitter"><Image src={twitterIcon} alt="Twitter" className="social-icon"/></a></li>
                </ul>
                <ul className="end-footer p-2 d-flex justify-content-center text-primary">
                    <h6>© 2023 IT World. All rights reserved.</h6>
                </ul>
            </div>
        </Container>
    )
}
export default Footer;