import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoutes from "./components/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },

      {
        path: "/account",
        element: (
          <ProtectedRoutes>
            <Account />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

export default router;
