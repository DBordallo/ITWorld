import NavBarDetails from "../components/Navbar-Details/NavBarDetails"
import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router-dom"

function Root (){
    return (
        <>
        <NavBarDetails />
        <Outlet />
        <Footer />
        </>
    )
}

export default Root