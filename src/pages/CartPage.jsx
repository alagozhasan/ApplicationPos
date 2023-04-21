import { Button, Card, Modal, Popconfirm, Table, message } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header/Header";
import CreateBill from "../Components/cart/CreateBill";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { increase, decrease, deleteCart } from "../redux/cartSlice";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Ürün Görseli",
      dataIndex: "img",
      key: "img",
      width: "125px",
      render: (text) => {
        return <img className="w-full h-20 object-cover" src={text} alt="" />;
      },
    },
    {
      title: "Ürün Adı",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Kategori",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Ürün Fiyatı",
      dataIndex: "price",
      key: "price",
      render: (text) => {
        return <span>{text.toFixed(2)}₺</span>;
      },
    },
    {
      title: "Ürün Adedi",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => {
        return (
          <div className="flex items-center gap-x-1">
            <Button
              type="primary"
              size="small"
              className="w-full  flex items-center
                              justify-center !rounded-full"
              onClick={() => {
                dispatch(increase(record));
              }}
              icon={<PlusOutlined />}
            />
            <span className="font-bold w-6 inline-block text-center">
              {record.quantity}
            </span>
            <Button
              type="primary"
              size="small"
              className="w-full flex items-center
                              justify-center !rounded-full"
              onClick={() => {
                dispatch(decrease(record));
              }}
              icon={<MinusOutlined />}
            />
          </div>
        );
      },
    },
    {
      title: "Toplam  Fiyat",

      render: (text, record) => {
        return <span>{(record.quantity * record.price).toFixed(2)}₺</span>;
      },
    },
    {
      title: "İşlem",

      render: (_, record) => {
        return (
          <Popconfirm
            title={() => {
              if (record.title.includes("TOGG")) {
                return "Fetocüyseniz evet e basın";
              } else {
                return "Silmek istediğinize emin misiniz?";
              }
            }}
            onConfirm={() => {
              dispatch(deleteCart(record));
              message.success("Ürün Sepetten Silindi.");
            }}
            okText="Evet"
            cancelText="Hayır"
          >
            <Button type="link" danger>
              Sil
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  console.log(isModalOpen);

  return (
    <>
      <Header />
      <div className="px-6">
        <Table
          dataSource={cart.cartItems}
          columns={columns}
          bordered
          pagination={false}
          scroll={{ x: 1200, y: 300 }}
        />
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>{cart.total.toFixed(2)}₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV %{cart.tax}</span>
              <span className="text-red-600">
                +{((cart.total * cart.tax) / 100).toFixed(2)}₺
              </span>
            </div>
            <div className="flex justify-between">
              <b>Toplam</b>
              <b> {(cart.total + (cart.total * cart.tax) / 100).toFixed(2)}₺</b>
            </div>

            <Button
              className="mt-4 w-full"
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
              disabled={cart.cartItems.length === 0}
            >
              Sipariş Oluştur
            </Button>
          </Card>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default CartPage;
