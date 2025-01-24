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
import CommercialElevators from "./pages/Products/CommercialElevators";
import CapsuleElevators from "./pages/Products/CapsuleElevators";
import GlassElevators from "./pages/Products/GlassElevators";
import About from "./pages/About";

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
        path: "/products/passenger-elevators",
        element: (
          <Suspense fallback={<LoadingScrn />}>
            <PassengerElevators />
          </Suspense>
        ),
      },
      {
        path: "/products/commercial-elevators",
        element: (
          <Suspense fallback={<LoadingScrn />}>
            <CommercialElevators />
          </Suspense>
        ),
      },
      {
        path: "/products/capsule-elevators",
        element: (
          <Suspense fallback={<LoadingScrn />}>
            <CapsuleElevators />
          </Suspense>
        ),
      },
      {
        path: "/products/glass-elevators",
        element: (
          <Suspense fallback={<LoadingScrn />}>
            <GlassElevators />
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
