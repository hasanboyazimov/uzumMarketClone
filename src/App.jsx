import styles from "../src/App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

//layouts
import RootLayout from "./layout/RootLayaout";

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
          path: "  /about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: `/${id}`,
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
