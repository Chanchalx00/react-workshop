import React from "react";
import { useState, useEffect } from "react";
import './main.css';
import { Products } from "./Products";

export const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data?.products);
    console.log(data?.products);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="home-view">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Products</h2>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        <Products products={products} />
      </div>
    </section>
  );
};
