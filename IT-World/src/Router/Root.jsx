import NavBarDetails from "../components/Navbar-Details/NavBarDetails"
import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router-dom"
import Carousels from "../components/Carousel/Carousel"

function Root (){
    return (
        <>
        <NavBarDetails />
        <Carousels />
        <Outlet />
        <Footer />
        </>
    )
}

export default Root