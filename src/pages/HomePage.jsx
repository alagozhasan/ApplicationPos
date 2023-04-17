import React, { Component, useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Categories from "../Components/categories/Categories";
import Products from "../../../../ApplicationPos/client/src/Components/products/Product";
import CartTotals from "../Components/cart/cartTotals";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories/get-all");
        const data =await res.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  return (
    <div>
      <Header />
      <div
        className="home px-6 flex md:flex-row flex-col
            justify-between gap-10 md:pb-0 pb-24"
      >
        <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10">
          {/*categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10*/}
          <Categories categories={categories} setCategories={setCategories}/>
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10 min-h-[500px]">
          <Products />
        </div>
        <div
          className="cart-wrapper min-w-[300px] md:-mr-[24px]
                md:-mt-[2px] border"
        >
          <CartTotals />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
