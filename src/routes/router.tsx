import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Jobs from "../pages/Jobs";
import Login from "../pages/Login";
import Register from "../pages/Register";


export const routes = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>, 
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: '/home', 
            element: <Home></Home>
         }, 
         {
            path: "/about-us", 
            element: <About></About>
         }, 
         {
            path:'/contact-us', 
            element: <Contact></Contact>
         }, 
         {
            path:'/find-jobs', 
            element: <Jobs></Jobs>
         }, 
         {
            path: '/login', 
            element: <Login></Login>
         }, 
         {
            path: '/register', 
            element: <Register></Register>
         }
        
      ],
   },
]);
