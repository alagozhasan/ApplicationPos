import React, { Component, useState } from "react";
import { Button, Carousel, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import AuthCarousel from "../../Components/auth/AuthCarousel";

const Register = () => {
  const navigate = useNavigate();
  const [loading,setLoading]= useState(false);
  const onFinish = async (values) => {
    setLoading(true)
    try {
      const res = await fetch(process.env.REACT_APP_SERVER_URL+"/api/auth/register", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      if (res.status === 200) {
        message.success("Kayıt işlemi başarılı.");
        navigate("/giris");
        setLoading(false)
      }
    } catch (error) {
      console.log(error);
      message.error("Birşeyler yanlış gitti.");
    }
  };
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 flex flex-col h-full justify-center w-full relative">
          <h1 className="text-center text-5xl font-bold mb-2 ">LOGO</h1>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Kullanıcı adı "
              name={"userName"}
              rules={[
                {
                  required: true,
                  message: "Bu alanı doldurmak zorunludur!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="E-mail "
              name={"email"}
              rules={[
                {
                  required: true,
                  message: "Bu alanı doldurmak zorunludur!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Şifre "
              name={"password"}
              rules={[
                {
                  required: true,
                  message: "Bu alanı doldurmak zorunludur!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Şifre Doğrulama"
              name={"passwordConfirm"}
              rules={[
                {
                  required: true,
                  message: "Bu alanı doldurmak zorunludur!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Şifreler eşleşmiyor"));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full"
                loading={loading}
              >
                Kaydol
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Bir hesabın var mı?&nbsp;{" "}
            <Link to="/giris" className="text-blue-600">
              Şimdi giriş yap
            </Link>
          </div>
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full flex items-center">
          <div className="w-full h-full">
            <Carousel className="!h-full px-6">
              <AuthCarousel
                img="/images/responsive.svg"
                title="Responsive"
                desc="Tüm Cihaz Boyutlarıyla Uyumlu"
              />

              <AuthCarousel
                img="/images/statistic.svg"
                title="İstatistikler  "
                desc="Geniş Tutulan İstatistikler"
              />

              <AuthCarousel
                img="/images/admin.svg"
                title="Admin"
                desc="Admin paneli ile tüm bilgilere kolaylıkla erişim"
              />

              <AuthCarousel
                img="/images/customer.svg"
                title="Müşteri Memnuniyeti"
                desc="Deneyim Sonunda Üründen Memnun Müşteriler"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
