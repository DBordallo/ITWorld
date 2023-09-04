
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBarDetails from './components/Navbar-Details/NavBarDetails.jsx'
import CardsDetails from './components/cards/Details-Card.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Card/Card.jsx'
import BasicExample from './components/Nav/Nav.jsx';
import FormFunction from "./components/Form/Form"
import Footer from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <NavBarDetails />
    <CardsDetails />
    <BasicExample />
    <Cards />
    <FormFunction />
    <Footer></Footer>
    </>,
)
