import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: (
      <div>
        please go back to home page{" "}
        <Link to="/" className="text-info">
          home{" "}
        </Link>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
