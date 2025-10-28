import React from "react";
import { Header } from "./components/header.jsx";
import { Home } from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductDetails } from "./ProductDetails.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productdetails" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
