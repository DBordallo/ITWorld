
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBarDetails from './components/Navbar-Details/NavBarDetails.jsx'
import CardsDetails from './components/cards/cards.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Card/Card.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <NavBarDetails />
    <CardsDetails />
    <App />
    <Cards />
    </>,
)
