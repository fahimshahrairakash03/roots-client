import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Login/Signup";
import Review from "../../pages/Review/Review";
import ReviewForm from "../../pages/Review/ReviewForm";
import AddService from "../../pages/Services/AddService";
import ServiceDetails from "../../pages/Services/ServiceDetails";
import Services from "../../pages/Services/Services";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("https://roots-agency-server.vercel.app/services"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://roots-agency-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/reviewform",
        element: <ReviewForm></ReviewForm>,
        loader: ({ params }) =>
          fetch(`https://roots-agency-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/review",
        element: (
          <PrivateRoutes>
            <Review></Review>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoutes>
            <AddService></AddService>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
