import styles from "../src/App.module.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

//layouts
import RootLayout from "./layout/RootLayaout";
import SingleProduct from "./pages/SingleProduct";

//components
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const { user } = use;
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayout />
        </ProtectedRoutes>
      ),
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
