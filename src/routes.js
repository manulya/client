import { ADMIN_ROUTE, CATALOG_ROUTE, PICTURE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, REQUEST_ROUTE } from "./utils/consts.js"
import { Admin } from "./components/admin/admin.jsx"
// import Requests from "./components/requests"
import Login from './components/login/login.jsx'
import Registeration from "./components/registration/register.jsx"
import Catalog from "./components/catalog/catalog.jsx"
// import PicturePage from "./components/PicturePage/"


export const authRoutes =[
    {
        path:ADMIN_ROUTE,
        Component: Admin
    },
//     {
//         path:REQUEST_ROUTE,
//         Component: Requests
//     },
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
    // {
    //     path:PICTURE_ROUTE,
    //     Component: PicturePage
    // },
]
