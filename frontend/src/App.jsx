import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const location = useLocation(); // Track the current route

  // Route-to-title mapping
  const routeTitles = {
    "/": "Home - Forever",
    "/collection": "Collection - Forever",
    "/about": "About Us - Forever",
    "/contact": "Contact Us - Forever",
    "/cart": "Your Cart - Forever",
    "/login": "Login - Forever",
    "/place-order": "Place Order - Forever",
    "/orders": "Your Orders - Forever",
    "/verify": "Verify Account - Forever",
  };

  useEffect(() => {
    // Set the document title based on the current route
    const title = routeTitles[location.pathname] || "Forever";
    document.title = title;

    // Trigger loader on route change
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loader after 1 second (simulate loading)
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, [location]); // Run this effect whenever the route changes

  if (isLoading) {
    return <Loader />; // Show loader during route transitions
  }

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
