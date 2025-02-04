import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages";
import CreateCar from "../pages/car/create";
import Cars from "../pages/car";
import EditCar from "../pages/car/edit";
import ErrorPage from "../components/ErrorPage";
import RequireAuth from "../components/RequireAuth";

import { carById, cars, rents, userAndRents, userCars, users } from "../api/loaders";

import {authRouter} from "../routers/auth";
import Rents from "../pages/rent";
import CreateRent from "../pages/rent/create";
import AdminPage from "../components/AdminPage";
import Users from "../pages/user";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          {
            path: "/",
            element: <Home />,
            loader: userCars
          },
          {
            element: <AdminPage />,
            children: [
              {
                path: "/cars",
                element: <Cars />,
                loader: cars
              },
              {
                path: "/cars/create",
                element: <CreateCar />,
              },
              {
                path: "/cars/:id",
                element: <EditCar />,
                loader: carById
              },
              {
                path: "/rents",
                element: <Rents />,
                loader: rents
              },
              {
                path: "/rents/create",
                element: <CreateRent />,
                loader: userAndRents
              },
              {
                path: "/users",
                element: <Users />,
                loader: users
              }
            ]
          }
        ]
      }
    ],
  },
  ...authRouter
]);