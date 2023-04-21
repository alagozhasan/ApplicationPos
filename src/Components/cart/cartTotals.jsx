import React, { Component } from "react";
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { ClearOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart, increase, decrease, reset } from "../../redux/cartSlice";

const CartTotals = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-green-600 text-center py-4 text-white font-bold tracking-wide">
        {" "}
        Sepetteki Ürünler
      </h2>
      <ul className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
        {cart.cartItems.length > 0
          ? cart.cartItems.map((item) => (
              <li className="cart-item flex justify-between" key={item._id}>
                <div className="flex items-center ">
                  <img
                    src={item.img}
                    alt="404 NOT FOUND"
                    className="w-16 h-16 object-cover cursor-pointer"
                    onClick={() => {
                      dispatch(deleteCart(item));
                      message.success("Ürün Sepetten Silindi.");
                    }}
                  />
                  <div className="flex flex-col ml-2">
                    <b>{item.title}</b>
                    <span>
                      {item.price}₺ x {item.quantity}{" "}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-1">
                  <Button
                    type="primary"
                    size="small"
                    className="w-full  flex items-center
                                justify-center !rounded-full"
                    onClick={() => {
                      dispatch(increase(item));
                    }}
                    icon={<PlusOutlined />}
                  />
                  <span className="font-bold w-6 inline-block text-center">
                    {item.quantity}
                  </span>
                  <Button
                    type="primary"
                    size="small"
                    className="w-full flex items-center
                                justify-center !rounded-full"
                    onClick={() => {
                      dispatch(decrease(item));
                    }}
                    icon={<MinusOutlined />}
                  />
                </div>
              </li>
            )).reverse()
          : "Sepette hiç ürün yok ..."}
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <b> Ara toplam</b>
            <span> {cart.total.toFixed(2)}₺</span>
          </div>
          <div className="flex justify-between p-2">
            <b>KDV %{cart.tax}</b>
            <span className="text-red-700">
              {" "}
              {((cart.total * cart.tax) / 100).toFixed(2)}₺
            </span>
          </div>
        </div>
        <div className=" border-b mt-4">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-500"> Genel toplam</b>
            <span className="text-xl ">
              {" "}
              {(cart.total + (cart.total * cart.tax) / 100).toFixed(2)}₺
            </span>
          </div>
        </div>
        <div className="py-4 px-4">
          <Button
            type="primary"
            size="large"
            className="w-full"
            disabled={cart.cartItems.length === 0}
            onClick={() => navigate("/sepet")}
          >
            Sipariş Oluştur
          </Button>
          <Button
            type="primary"
            size="large"
            className="w-full mt-2 flex items-center
                        justify-center"
            icon={<ClearOutlined />}
            disabled={cart.cartItems.length === 0}
            onClick={() => {
              if (window.confirm("Emin misiniz? \nÇünkü ben eminim ")) {
                if (window.confirm("Silerim ama haberin olsun"))
                  dispatch(reset());
                message.success("Sepet Temizlendi.");
              }
            }}
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
