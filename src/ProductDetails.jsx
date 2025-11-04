import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ProductDetails = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const getProducts = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id) getProducts();
  }, [id]);

  const handleAddtocart = ()=>{
   const cart = JSON.parse(localStorage.getItem("cart")) || [];
   const alreadyexist = cart.find((item)=>item.id == product.id);
  if(!alreadyexist){
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart")
  }else{
    alert("Product already exist in cart")
  }
  }
   if (loading) {return (
    <div className="py-8 px-12 min-h-screen bg-linear-to-b from-[#2e005f] via-[#d47cda] to-[#fcd17d] text-white text-xl justify-center flex items-center ">
      <div className="mr-2 w-5 h-5 border-4 border-gray-300 border-t-fuchsia-900 rounded-full animate-spin"></div>
      Loading...
    </div>
  );}
  
  if (!product) {
    return (
      <div className="py-8 px-12 min-h-screen flex justify-center items-center text-white text-xl">
        Product not found.
      </div>
    );
  }
  return (
    <section className="py-8 px-12 min-h-screen bg-linear-to-b from-[#2e005f] via-[#d47cda] to-[#fcd17d]">
      <div className="p-4 rounded-sm flex flex-row  w-full text-white bg-white/10 border-2 border-white/20 backdrop-blur-[30px] shadow-md transition-transform duration-200">
        <img
          src={product?.images?.[0]}
          alt={product?.title}
          width={600}
          height={600}
          className=""
        />
        <div className="flex flex-col space-y-3 w-[50%] justify-center">
          <p className="text-3xl font-bold">{product?.title}</p>
          <p>{product?.brand}</p>
          <p>Price: ${product?.price}</p>
          <p>{product?.description}</p>
          <div>
            <button onClick={handleAddtocart}>Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};
