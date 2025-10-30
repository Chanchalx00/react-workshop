import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Products = ({products}) => {
  const naviagate = useNavigate();
  return (
    <>
      {products.map((product) => (
        <div key={product?.id} className="product-card">
          <img
            src={product?.images[0]}
            alt={product?.title}
            width={200}
            height={200}
          />
          <p>{product?.title}</p>
          <p>price: {product?.price}</p>
          <p>{product?.description}</p>
          <div>
            <button onClick={()=>{
              naviagate(`/productdetails?id=${product?.id}`)
            }}>Show Details</button>
          </div>
        </div>
      ))}
    </>
  );
}
