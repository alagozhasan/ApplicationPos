import { Button, Form, Input, message, Modal, Select, Table } from "antd";
import React, { useEffect, useState } from "react";

const Edit = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [editingItem, setEditingItem] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories/get-all");
        const data = await res.json();
        setProducts(data);
        data &&
          setCategories(
            data.map((item) => {
              return { ...item, value: item.title };
            })
          );
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

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

  const onFinish = (values) => {
    console.log(values);
    try {
      fetch("http://localhost:5000/api/products/update-product", {
        method: "PUT",
        body: JSON.stringify({ ...values, productID: editingItem._id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      console.log(editingItem._id);
      message.success("Ürün başarıyla güncellendi.");
      setProducts(
        products.map((item) => {
          if (item._id === editingItem._id) {
            return values;
          } else {
            return item;
          }
        })
      );
    } catch (error) {
      message.error("Bir şeyler yanlış gitti.");
      console.log(error);
    }
  };

  const deleteProduct = (id) => {
    if (window.confirm("Emin misiniz?")) {
      try {
        fetch("http://localhost:5000/api/products/delete-product", {
          method: "DELETE",
          body: JSON.stringify({ productID: id }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        message.success("Ürün silindi.");
        setProducts(products.filter((item) => item._id !== id));
      } catch (error) {
        message.error("Birşeyler yanlış  gitti.");
        console.log(error);
      }
    }
  };
  const columns = [
    {
      title: "Ürün Adı",
      dataIndex: "title",
      width: "8%",
      render: (_, record) => {
        return <p>{record.title}</p>;
      },
    },
    {
      title: "Ürün Görseli",
      dataIndex: "img",
      width: "2%",
      render: (_, record) => {
        return (
          <img
            src={record.img}
            alt=""
            className="w-full h-20 object-cover"
          ></img>
        );
      },
    },
    {
      title: "Ürün Fiyatı",
      dataIndex: "price",
      width: "8%",
    },
    {
      title: "Kategori",
      dataIndex: "category",
      width: "8%",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "8%",
      render: (text, record) => {
        return (
          <div>
            <Button
              type="link"
              onClick={() => {
                setIsEditModalOpen(true);
                setEditingItem(record);
              }}
              className="pl-0"
            >
              Düzenle
            </Button>

            <Button
              type="link"
              danger
              onClick={() => deleteProduct(record._id)}
            >
              Sil
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        bordered
        dataSource={products}
        columns={columns}
        rowKey={"_id"}
        scroll={{ x: 1000, y: 600 }}
      />
      <Modal
        title="Yeni Ürün Ekle"
        open={isEditModalOpen}
        onCancel={() => {
          setIsEditModalOpen(false);
        }}
        footer={false}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          initialValues={editingItem}
        >
          <Form.Item
            name="title"
            label="Ürün Adı"
            rules={[
              {
                required: true,
                message: "Bu alan boş bırakılamaz!",
              },
            ]}
          >
            <Input placeholder="Beypazarı Maden Suyu" />
          </Form.Item>
          <Form.Item
            name="img"
            label="Ürün Görseli"
            rules={[
              {
                required: true,
                message: "Bu alan boş bırakılamaz!",
              },
            ]}
          >
            <Input placeholder="Ürün görsel adresi" />
          </Form.Item>
          <Form.Item
            name="price"
            label="Ürün Fiyatı"
            rules={[
              {
                required: true,
                message: "Bu alan boş bırakılamaz!",
              },
            ]}
          >
            <Input placeholder="Fiyat ₺" />
          </Form.Item>

          <Form.Item
            name="category"
            label="Kategori Seç"
            rules={[
              {
                required: true,
                message: "Bu alan boş bırakılamaz!",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.title ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.title ?? "").toLowerCase())
              }
              options={categories}
            />
          </Form.Item>

          <Form.Item className="flex justify-end mb:0">
            <Button type="primary" htmlType="submit">
              Kaydet
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;
