
import React, {Component} from 'react';
import {Button} from "antd";
import {ClearOutlined, PlusOutlined, MinusOutlined} from '@ant-design/icons';

class CartTotals extends Component {
    render() {
        return (
            <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
                <h2 className="bg-green-600 text-center py-4 text-white font-bold tracking-wide"> Sepetteki Ürünler</h2>
                <ul className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
                    <li className="cart-item flex justify-between">
                        <div className="flex items-center ">
                            <img src="https://im.haberturk.com/2022/07/03/ver1656804033/3474668_1024x576.jpg"
                                 alt="404 NOT FOUND" className="w-16 h-16 object-cover"
                            />
                            <div className="flex flex-col ml-2">
                                <b>Karpuz</b>
                                <span>15₺ x 2 </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <Button type="primary"
                                    size="small"
                                    className="w-full  flex items-center
                                justify-center !rounded-full"
                                    icon={<PlusOutlined/>}/>
                            <span className="font-bold">1</span>
                            <Button type="primary"
                                    size="small"
                                    className="w-full flex items-center
                                justify-center !rounded-full"
                                    icon={<MinusOutlined/>}/>
                        </div>
                    </li>
                    <li className="cart-item flex justify-between">
                        <div className="flex items-center ">
                            <img src="https://im.haberturk.com/2022/07/03/ver1656804033/3474668_1024x576.jpg"
                                 alt="404 NOT FOUND" className="w-16 h-16 object-cover"
                            />
                            <div className="flex flex-col ml-2">
                                <b>Karpuz</b>
                                <span>15₺ x 2 </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <Button type="primary"
                                    size="small"
                                    className="w-full  flex items-center
                                justify-center !rounded-full"
                                    icon={<PlusOutlined/>}/>
                            <span>1</span>
                            <Button type="primary"
                                    size="small"
                                    className="w-full flex items-center
                                justify-center !rounded-full"
                                    icon={<MinusOutlined/>}/>
                        </div>
                    </li>
                    <li className="cart-item flex justify-between">
                        <div className="flex items-center ">
                            <img src="https://im.haberturk.com/2022/07/03/ver1656804033/3474668_1024x576.jpg"
                                 alt="404 NOT FOUND" className="w-16 h-16 object-cover"
                            />
                            <div className="flex flex-col ml-2">
                                <b>Karpuz</b>
                                <span>15₺ x 2 </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <Button type="primary"
                                    size="small"
                                    className="w-full  flex items-center
                                justify-center !rounded-full"
                                    icon={<PlusOutlined/>}/>
                            <span>1</span>
                            <Button type="primary"
                                    size="small"
                                    className="w-full flex items-center
                                justify-center !rounded-full"
                                    icon={<MinusOutlined/>}/>
                        </div>
                    </li>
                    <li className="cart-item flex justify-between">
                        <div className="flex items-center ">
                            <img src="https://im.haberturk.com/2022/07/03/ver1656804033/3474668_1024x576.jpg"
                                 alt="404 NOT FOUND" className="w-16 h-16 object-cover"
                            />
                            <div className="flex flex-col ml-2">
                                <b>Karpuz</b>
                                <span>15₺ x 2 </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <Button type="primary"
                                    size="small"
                                    className="w-full  flex items-center
                                justify-center !rounded-full"
                                    icon={<PlusOutlined/>}/>
                            <span>1</span>
                            <Button type="primary"
                                    size="small"
                                    className="w-full flex items-center
                                justify-center !rounded-full"
                                    icon={<MinusOutlined/>}/>
                        </div>
                    </li>
                    <li className="cart-item flex justify-between">
                        <div className="flex items-center ">
                            <img src="https://im.haberturk.com/2022/07/03/ver1656804033/3474668_1024x576.jpg"
                                 alt="404 NOT FOUND" className="w-16 h-16 object-cover"
                            />
                            <div className="flex flex-col ml-2">
                                <b>Karpuz</b>
                                <span>15₺ x 2 </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <Button type="primary"
                                    size="small"
                                    className="w-full  flex items-center
                                justify-center !rounded-full"
                                    icon={<PlusOutlined/>}/>
                            <span>1</span>
                            <Button type="primary"
                                    size="small"
                                    className="w-full flex items-center
                                justify-center !rounded-full"
                                    icon={<MinusOutlined/>}/>
                        </div>
                    </li>
                    <li className="cart-item flex justify-between">
                        <div className="flex items-center ">
                            <img src="https://im.haberturk.com/2022/07/03/ver1656804033/3474668_1024x576.jpg"
                                 alt="404 NOT FOUND" className="w-16 h-16 object-cover"
                            />
                            <div className="flex flex-col ml-2">
                                <b>Karpuz</b>
                                <span>15₺ x 2 </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <Button type="primary"
                                    size="small"
                                    className="w-full  flex items-center
                                justify-center !rounded-full"
                                    icon={<PlusOutlined/>}/>
                            <span>1</span>
                            <Button type="primary"
                                    size="small"
                                    className="w-full flex items-center
                                justify-center !rounded-full"
                                    icon={<MinusOutlined/>}/>
                        </div>
                    </li>
                    <li className="cart-item flex justify-between">
                        <div className="flex items-center ">
                            <img src="https://im.haberturk.com/2022/07/03/ver1656804033/3474668_1024x576.jpg"
                                 alt="404 NOT FOUND" className="w-16 h-16 object-cover"
                            />
                            <div className="flex flex-col ml-2">
                                <b>Karpuz</b>
                                <span>15₺ x 2 </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <Button type="primary"
                                    size="small"
                                    className="w-full  flex items-center
                                justify-center !rounded-full"
                                    icon={<PlusOutlined/>}/>
                            <span>1</span>
                            <Button type="primary"
                                    size="small"
                                    className="w-full flex items-center
                                justify-center !rounded-full"
                                    icon={<MinusOutlined/>}/>
                        </div>
                    </li>
                    <li className="cart-item flex justify-between">
                        <div className="flex items-center ">
                            <img src="https://im.haberturk.com/2022/07/03/ver1656804033/3474668_1024x576.jpg"
                                 alt="404 NOT FOUND" className="w-16 h-16 object-cover"
                            />
                            <div className="flex flex-col ml-2">
                                <b>Karpuz</b>
                                <span>15₺ x 2 </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <Button type="primary"
                                    size="small"
                                    className="w-full  flex items-center
                                justify-center !rounded-full"
                                    icon={<PlusOutlined/>}/>
                            <span>1</span>
                            <Button type="primary"
                                    size="small"
                                    className="w-full flex items-center
                                justify-center !rounded-full"
                                    icon={<MinusOutlined/>}/>
                        </div>
                    </li>

                </ul>
                <div className="cart-totals mt-auto">
                    <div className="border-t border-b">
                        <div className="flex justify-between p-2">
                            <b> Ara toplam</b>
                            <span> 99₺</span>
                        </div>
                        <div className="flex justify-between p-2">
                            <b>KDV %8</b>
                            <span className="text-red-700"> 7.92₺</span>
                        </div>
                    </div>
                    <div className=" border-b mt-4">
                        <div className="flex justify-between p-2">
                            <b className="text-xl text-green-500"> Genel toplam</b>
                            <span className="text-xl "> 106.2₺</span>
                        </div>
                    </div>
                    <div className="py-4 px-4">
                        <Button type="primary" size="large" className="w-full"
                        >Sipariş Oluştur</Button>
                        <Button type="primary" size="large" className="w-full mt-2 flex items-center
                        justify-center"
                                icon={<ClearOutlined/>}
                                danger>Temizle</Button>
                    </div>

                </div>
            </div>
        );
    }
}

export default CartTotals;