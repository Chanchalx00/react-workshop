import React, { useEffect, useState } from "react";
import { Header } from "./components/header.jsx";
import { Home } from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductDetails } from "./ProductDetails.jsx";
import { LoginForm } from "./components/LoginForm.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { Cart } from "./components/Cart.jsx";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("isLoggedIn") == "true";
    setIsLoggedIn(token);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <BrowserRouter>
      {isLoggedIn && <Header onLogout={handleLogout} />}
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <LoginForm onLogin={handleLogin} />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/productdetails"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
