import React, { Component, useEffect, useState } from "react";
import { PlusOutlined,EditOutlined } from "@ant-design/icons";
import Add from "./Add";
import { useNavigate } from "react-router-dom";
const Products = ({categories}) => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
const navigate =useNavigate()
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
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
        <div
          className="product-item border hover:shadow-lg 
        cursor-pointer transition-all select-none "
        >
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

      <div
        className="product-item border hover:shadow-lg 
        cursor-pointer transition-all select-none p-1 bg-purple-600
        flex justify-center items-center hover:opacity-90 min-h-[180px]" onClick={()=>setIsAddModalOpen(true)}
      >
        <PlusOutlined className="text-white md:text-3xl" />
      </div>
      <div
        className="product-item border hover:shadow-lg 
        cursor-pointer transition-all select-none p-1 bg-orange-600
        flex justify-center items-center hover:opacity-90 min-h-[180px]"
        onClick={()=> navigate("/urunler")}
      >
        <EditOutlined className="text-white md:text-3xl" />
      </div>
      <Add isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} categories={categories}
      setProducts={setProducts} products={products}
      />
    </div>
  );
};

export default Products;
