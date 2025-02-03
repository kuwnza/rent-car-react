import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages";
import CreateCar from "../pages/car/create";
import Cars from "../pages/car";
import EditCar from "../pages/car/edit";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cars",
        element: <Cars /> 
      },
      {
        path: "/cars/create",
        element: <CreateCar />,
      },
      {
        path: "/cars/:id",
        element: <EditCar />,
      }
    ],
  },
]);