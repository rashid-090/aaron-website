
import './App.css'
import { ScrollToTop } from "react-router-scroll-to-top";
import { lazy, Suspense, useState, useEffect} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";


import {Header,Footer} from './components/index'

const Home = lazy(() => import("./pages/Home"));

const Layout = () => {
  return(
    <div className="app 2xl:max-w-[2500px] mx-auto min-h-screen flex flex-col justify-between">
      <Header/>
      <ScrollToTop />
      <Outlet />
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            not found
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <Home/>
          </Suspense>
        ),
      },
      
    ],
  },
]);   


function App() {


  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App