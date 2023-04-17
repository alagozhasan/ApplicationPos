import React, { Component, useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data =await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);
  
  
  return (
    <div className="product-wrapper grid grid-cols-5">
      {products.map((item) => (
        <div className="product-item border hover:shadow-lg 
        cursor-pointer transition-all select-none p-1">
          <div className="product-image"></div>
          <img
            className="h-28 object-cover w-full border-b"
            src={item.img}
            alt="Görsel silinmiş olabilir tekrar yüklerin"
          />
          <div className="product-info flex flex-col p-3">
            <span className="font-bold">{item.title}</span>
            <span>{item.price}₺</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
