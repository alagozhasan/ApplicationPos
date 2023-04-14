import React, {Component} from 'react';
import {Button, Carousel, Checkbox, Form, Input} from "antd";
import {Link} from "react-router-dom";
import AuthCarousel from "../../Components/auth/AuthCarousel";

class Login extends Component {
    render() {
        return (
            <div className="h-screen">
                <div className="flex justify-between h-full">
                    <div className="xl:px-20 px-10 flex flex-col h-full justify-center w-full relative">
                        <h1 className="text-center text-5xl font-bold mb-2 ">LOGO</h1>
                        <Form layout="vertical">

                            <Form.Item label="E-mail " name={"email"} rules={[
                                {
                                    required: true,
                                    message: "Bu alanı doldurmak zorunludur!",
                                },
                            ]}
                            >

                                <Input/>
                            </Form.Item>
                            <Form.Item label="Şifre " name={"password"}
                                       rules={[
                                           {
                                               required: true,
                                               message: "Bu alanı doldurmak zorunludur!",
                                           },
                                       ]}
                            >

                                <Input.Password/>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" size="large"
                                        className="w-full">Giriş Yap</Button>
                            </Form.Item>
                            <Form.Item name={"remember"} valuePropName="checked">
                                <div className="flex justify-between">
                                    <Checkbox>Beni Hatırla</Checkbox>
                                    <Link to="" className="text-slate-400">Şifremi Unuttum</Link>
                                </div>
                            </Form.Item>
                        </Form>
                        <div className="flex justify-center absolute left-0 bottom-10 w-full"
                        >Bir hesabın yok mu?&nbsp; <Link to="/kayit" className="text-blue-600">
                            Şimdi kayıt ol</Link></div>
                    </div>
                    <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full flex items-center">
                        <div className="w-full h-full">

                            <Carousel className="!h-full px-6">
                                <AuthCarousel img="/images/responsive.svg" title="Responsive"
                                              desc="Tüm Cihaz Boyutlarıyla Uyumlu"/>

                                <AuthCarousel img="/images/statistic.svg" title="İstatistikler  "
                                              desc="Geniş Tutulan İstatistikler"/>

                                <AuthCarousel img="/images/admin.svg" title="Admin"
                                              desc="Admin paneli ile tüm bilgilere kolaylıkla erişim"/>

                                <AuthCarousel img="/images/customer.svg" title="Müşteri Memnuniyeti"
                                              desc="Deneyim Sonunda Üründen Memnun Müşteriler"/>


                            </Carousel>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;