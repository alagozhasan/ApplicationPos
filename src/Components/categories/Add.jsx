import { Button, Form, Input, Modal, message } from "antd";
import React from "react";

const Add = ({
  isAddModalOpen,
  setIsAddModalOpen,
  categories,
  setCategories,
}) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Kategori başarıyla eklendi.");
      form.resetFields();
      setCategories([...categories, {
    _id:Math.random(),
    title:values.title
    }]); //!Tüm kategorileri al ve verdiğimi de ekle
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal
        title="Yeni Kategori"
        open={isAddModalOpen}
        onCancel={() => {
          setIsAddModalOpen(false);
        }}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label="Kategori Ekle"
            rules={[
              {
                required: true,
                message: "Bu alan boş bırakılamaz!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item className="flex justify-end mb:0">
            <Button type="primary" htmlType="submit">
              Ekle
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Add;
