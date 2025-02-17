import { createBrowserRouter, Navigate } from "react-router";
import HomePage from "../features/HomePage.tsx";
import AboutPage from "../features/AboutPage.tsx";
import ContactPage from "../features/ContactPage.tsx";
import App from '../layout/App.tsx'
import CatalogPage from "../features/catalog/CatalogPage.tsx";
import ProductDetailsPage from "../features/catalog/ProductDetails.tsx";
import ErrorPage from "../features/ErrorPage.tsx";
import ServerError from "../errors/ServerError.tsx";
import NotFound from "../errors/NotFound.tsx";
import ShoppingCartPage from "../features/cart/ShoppingCartPage.tsx";
import LoginPage from "../features/account/loginPage.tsx";
import RegisterPage from "../features/account/registerPage.tsx";
import CheckoutPage from "../features/checkout/CheckoutPage.tsx";
import AuthGuard from "./AuthGuard.tsx";
import OrderList from "../features/orders/OrderList.tsx";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {element:<AuthGuard/>,children:[
                {path:"checkout", element:<CheckoutPage/>},
                {path:"orders", element:<OrderList/>}
            ]
             },
            {path:"",element:<HomePage/>},
            {path:"about",element:<AboutPage/>},
            {path:"contact",element:<ContactPage/>},
            {path:"catalog",element:<CatalogPage/>},
            {path:"cart",element:<ShoppingCartPage/>},
            {path:"error",element:<ErrorPage/>},
            {path:"server-error",element:<ServerError/>},
            {path:"not-found",element:<NotFound/>},
            {path:"catalog/:id",element:<ProductDetailsPage/>},
            {path:"login", element:<LoginPage/>},
            {path:"register", element:<RegisterPage/>},
            {path:"*",element:<Navigate to="not-found"/>},
        ]
    }

])