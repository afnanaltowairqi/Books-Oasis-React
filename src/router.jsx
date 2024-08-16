import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Sign'
import HomeLogin from './pages/HomeLogin'
// import Favorite from './pages/Favorite'


import Book from './pages/Book'


function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/Login",
            element: <Login />,
        },
        {
            path: "/Signup",
            element: <Signup />,
        },
        {
            path: "/Book/:rank",
            element: <Book />,
        },
        {
            path: "/HomeLogin",
            element: <HomeLogin />,
        },
        // {
        //     path: "/Favorite",
        //     element: <Favorite />,
        // },
    ]);
    return(
    <RouterProvider router={router} />      
)
}
export default Router