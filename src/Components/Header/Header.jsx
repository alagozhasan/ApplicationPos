import React, {Component} from 'react'
import {Badge, Input} from "antd";
import {
    SearchOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    CopyOutlined,
    UserOutlined,
    PieChartOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="border-b-mb-6">
                <header className="py-4 px-6 flex justify-between
                gap-10">
                    <div className="logo">
                        <Link to="/">
                            <h2 className="text-2xl font-bold md:text-4xl mt-2">LOGO</h2>
                        </Link>
                    </div>
                    <div className="header-search flex-1 flex justify-center">
                        <Input size="large" placeholder="Ürün Ara..."
                               prefix={<SearchOutlined/>}
                               className="rounded-full max-w-[800px]:"
                        />
                    </div>
                    <div className="menu-links flex justify-between items-center
                    gap-7 md:static fixed z-50 bottom-0 md:w-auto w-screen
                    md:bg-transparent bg-white left-0 md:border-t-0 border-t
                    md:px-0 px-4 py-1">

                        <Link to="/" className="menu-link flex flex-col hover:text-[#40a9ff]
                        transition-all">
                            <HomeOutlined className="md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Ana Sayfa</span>
                        </Link>
                        <Badge count={5} offset={[0, 6]} className="md:flex hidden">
                            <Link to="/sepet" className="menu-link flex flex-col hover:text-[#40a9ff]
                        transition-all">

                                <ShoppingCartOutlined className="md:text-2xl text-xl"/>
                                <span className="md:text-xs text-[10px]">Sepet</span>

                            </Link>
                        </Badge>
                        <Link to="/bills" className="menu-link flex flex-col hover:text-[#40a9ff]
                        transition-all">
                            <CopyOutlined className="md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Faturalar</span>
                        </Link>

                        <Link to="/musteriler" className="menu-link flex flex-col hover:text-[#40a9ff]
                        transition-all">
                            <UserOutlined className="md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Müşteriler</span>
                        </Link>

                        <Link to="/istatistik" className="menu-link flex flex-col hover:text-[#40a9ff]
                        transition-all ">
                            <PieChartOutlined className="md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">İstatistikler</span>
                        </Link>

                        <Link to="/*" className="menu-link flex flex-col hover:text-[#40a9ff]
                        transition-all">
                            <LogoutOutlined className="md:text-2xl text-xl"/>
                            <span className="md:text-xs text-[10px]">Çıkış</span>
                        </Link>


                    </div>
                    <Badge count={5} offset={[0, 6]} className="md:hidden flex">
                        <Link to="/sepet" className="menu-link flex flex-col hover:text-[#40a9ff]
                        transition-all">

                            <ShoppingCartOutlined className="text-2xl"/>
                            <span className="md:text-xs text-[10px]">Sepet</span>

                        </Link>
                    </Badge>
                </header>
            </div>
        )
    }
}
