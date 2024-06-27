import styles from "../src/App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

//layouts
import RootLayout from "./layout/RootLayaout";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/singleProduct/:id",
          element: <SingleProduct />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
