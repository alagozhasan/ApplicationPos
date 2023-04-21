import React, { Component } from "react";
import { Badge, Input } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  PieChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css"

const Header = () => {
  const cart = useSelector((state) => state.cart);
console.log(cart.cartItems);
  return (
    <div className="border-b-mb-6">
      <header
        className="py-4 px-6 flex justify-between
                gap-10"
      >
        <div className="logo">
          <Link to="/">
            <h2 className="text-2xl font-bold md:text-4xl mt-2">LOGO</h2>
          </Link>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input
            size="large"
            placeholder="Ürün Ara..."
            prefix={<SearchOutlined />}
            className="rounded-full max-w-[800px]:"
          />
        </div>
        <div
          className="menu-links "
        >
          <Link
            to="/"
            className="menu-link "
          >
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Ana Sayfa</span>
          </Link>
          <Badge count={cart.cartItems.length} offset={[0, 0]} className="md:flex hidden">
            <Link
              to="/sepet"
              className="menu-link "        >
              <ShoppingCartOutlined className="md:text-2xl text-xl" />
              <span className="md:text-xs text-[10px]">Sepet</span>
            </Link>
          </Badge>
          <Link
            to="/faturalar"
            className="menu-link "
          >
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Faturalar</span>
          </Link>

          <Link
            to="/musteriler"
            className="menu-link "
          >
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Müşteriler</span>
          </Link>

          <Link
            to="/istatistik"
            className="menu-link  "
          >
            <PieChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">İstatistikler</span>
          </Link>

          <Link
            to="/*"
            className="menu-link "
          >
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Çıkış</span>
          </Link>
        </div>
        <Badge count={cart.cartItems.length} offset={[0, 0]} className="md:hidden flex">
          <Link
            to="/sepet"
            className="menu-link "
          >
            <ShoppingCartOutlined className="text-2xl" />
            <span className="md:text-xs text-[10px]">Sepet</span>
          </Link>
        </Badge>
      </header>
    </div>
  );
};
export default Header