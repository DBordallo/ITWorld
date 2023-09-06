import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cards from './components/Card/Card.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousels from './components/Carousel/Carousel.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Carousels />
    <Cards />
  </React.StrictMode>,
)
