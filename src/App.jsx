import "./App.css";
import { ScrollToTop } from "react-router-scroll-to-top";
import { lazy, Suspense, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

import { Header, Footer, LoadingScrn } from "./components/index";
import PassengerElevators from "./pages/Products/PassengerElevators";
import Catogory from "./pages/Products/Categories";
import Modal from "./pages/Products/Items";
import About from "./pages/About";
import Contact from "./pages/Contact";

const Home = lazy(() => import("./pages/Home"));

const Layout = () => {
  return (
    <div className="app  w-[98%] my-3  overflow-hidden 2xl:max-w-[2500px] mx-auto min-h-screen flex flex-col justify-between">
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <Suspense fallback={<LoadingScrn />}>not found</Suspense>,
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingScrn />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<LoadingScrn />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/products/:category",
        element: (
          <Suspense fallback={<LoadingScrn />}>
            <Catogory />
          </Suspense>
        ),
      },
      {
        path: "/products/:category/:id",
        element: (
          <Suspense fallback={<LoadingScrn />}>
            <Modal />
          </Suspense>
        ),
      },
    
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<LoadingScrn />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
