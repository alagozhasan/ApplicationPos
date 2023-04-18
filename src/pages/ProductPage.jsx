import React from "react";
import Header from "../Components/Header/Header";
import Edit from "../Components/products/Edit";

const ProductPage = () => {
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Ürünler</h1>
        <Edit/>
      </div>
    </>
  );
};

export default ProductPage;
