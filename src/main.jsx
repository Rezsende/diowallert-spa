import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from './Pages/Signin.jsx';
import Signup from './Pages/Signup.jsx';
import Home from './Pages/Home.jsx';
import NewTransaction from './Pages/NewTransaction.jsx';

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home/>,
  },
  
  {
    path: "/Signin",
    element: <Signin/>,
  },
  {
    path: "/Signup",
    element: <Signup/>,
  },
  {
    path: "/transaction/:type",
    element: <NewTransaction/>,
  },
]);






ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);