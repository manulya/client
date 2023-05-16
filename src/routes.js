import { ADMIN_ROUTE, CATALOG_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE,BASKET_ROUTE, ORDER_ROUTE, ADMIN_ORDERS_ROUTE } from "./utils/consts.js"
import { Admin } from "./components/admin/admin.jsx"
// import Requests from "./components/requests"
import Login from './components/login/login.jsx'
import Registeration from "./components/registration/register.jsx"
import Catalog from "./components/catalog/catalog.jsx"
import Basket from "./components/basket.jsx"
import Order from "./components/Order.jsx"
import OrderAdmin from "./components/orderAdmin.jsx"



export const authRoutes =[
    {
        path:ADMIN_ROUTE,
        Component: Admin
    },
    {
        path:BASKET_ROUTE,
        Component: Basket
    },
    {
        path:ORDER_ROUTE,
        Component: Order
    },
    {
        path:ADMIN_ORDERS_ROUTE,
        Component: OrderAdmin
    },
]

export const publicRoutes =[
    {
        path:LOGIN_ROUTE,
        Component: Login
    },
    {
        path:REGISTRATION_ROUTE,
        Component: Registeration
    },
    {
        path:CATALOG_ROUTE,
        Component: Catalog
    },
    
]
