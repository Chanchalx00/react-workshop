import React from "react";
import { useState, useEffect } from "react";

export const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  },[]);
  if (cart.length == 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No items in cart
      </div>
    );
  }
 const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <section>
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} height={120} width={120} />
            <p className="text-black">{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <div>Total{total.toFixed(2)}</div>
      </div>
    </section>
  );
};
