import App from "App";
import ProductDetails, { productLoader } from "pages/product-details/ProductDetails";
import About from "pages/About";
import Contact from "pages/Contact";
import ErrorPage from "pages/ErrorPage";
import Home from "pages/Home";
import Products, { productsLoader } from "pages/Products";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/products",
                    loader: productsLoader,
                    element: <Products />
                },
                {
                    path: "/products/:id",
                    loader: productLoader,
                    element: <ProductDetails />
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter;