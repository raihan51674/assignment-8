import {
  createBrowserRouter,
} from "react-router";
import Blogs from "../Pages/Blogs/Blogs";
import Booking from "../Pages/Bookings/Booking";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Root from "../Pages/Root/Root";
import LawDetails from "../Pages/LawDetails/LawDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement : <NotFound></NotFound>,
    children :[
      {
        index :true ,
        path: "/",
        loader:()=>fetch('CardLaywerData.json'),
        Component : Home,
      },
      {
        path : "/booking",
        loader:()=>fetch('CardLaywerData.json'), 
        Component :Booking
      },
      {
        path : "/blog",
        Component :Blogs
      },{
        path: "/LawDetails/:id",
        loader:()=>fetch('./CardLaywerData.json'),
        Component :LawDetails,
      },
    ]
  },
]);