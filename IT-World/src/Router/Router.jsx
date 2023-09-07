import {createBrowserRouter} from "react-router-dom"
import Cards from "../components/Card/Card"
import Form from "../components/Form/Form"
import CardsDetails from "../components/cards/Details-Card"
import Root from "./Root"
import FormEdit from "../components/FormEdit/FormEdit"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Cards />
            },
            {
                path: "/form",
                element: <Form />
            },
            {
                path: "/details/:id",
                element: <CardsDetails />
            },
            {
                path: "/form/:id",
                element: <FormEdit />
            }
        ]
    }
])

export default router 