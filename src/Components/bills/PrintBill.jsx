import {Button, Modal} from "antd";

const PrintBill = ({isModalOpen, setIsModalOpen}) => {

    return (

        <Modal width={800}
               title="Fatura Yazdır"
               open={isModalOpen}
               footer={false}
               onCancel={() => setIsModalOpen(false)}>
            <section className="py-20 bg-black">
                <div className="max-w-5xl mx-auto bg-white pc-6">
                    <article className="overflow-hidden">
                        <div className="logo my-6">
                            <h2 className="text-4xl font-bold text-slate-700 ">Logo</h2>
                        </div>
                        <div className="bill-details ">
                            <div className="grid grid-cols-4 gap12">
                                <div className="text-md text-slate-500">
                                    <b>Fatura Detayı : </b>
                                    <p>Açıklama</p>
                                    <p>Buraya</p>
                                    <p>Uzun bir adresi</p>
                                    <p>Yazacağım</p>
                                    <p>34 cgk 450</p>
                                </div>


                                <div className="text-md text-slate-500">
                                    <b>Fatura : </b>
                                    <p>Satıcı vergi no</p>
                                    <p>ve</p>
                                    <p>bunumla alakalı </p>
                                    <p>bilgiler</p>
                                </div>


                                <div className="text-md text-slate-500">
                                    <b>Fatura Numarası : </b>
                                    <p>00000000000</p>
                                    <br></br>
                                    <b>Tarih detay :</b>
                                    <p>2012:01:01</p>
                                    <p>34 bdb 427</p>
                                </div>


                                <div className="text-md text-slate-500">
                                    <b>Taksit : </b>
                                    <p>10 Gün</p>
                                    <br></br>
                                    <b>Vade Başlangıç : </b>
                                    <p>2012:01:01</p>
                                </div>


                            </div>
                        </div>
                        <div className="bill-tabel-area mt-8">
                            <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                                <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pt-4 text-left font-normal text-slate-700
                                    sm:pl-6 md:pl-0 sm:table-cell hidden">Görsel
                                    </th>

                                    <th scope="col" className="py-3.5 pt-4 text-left font-normal text-slate-700
                                    sm:pl-6 md:pl-0 sm:table-cell hidden">Başlık
                                    </th>

                                    <th scope="col" className="py-3.5 pt-4 text-left font-normal text-slate-700
                                    sm:pl-6 md:pl-0 sm:table-cell hidden">Fiyat
                                    </th>

                                    <th scope="col" className="py-3.5 pt-4 text-left font-normal text-slate-700
                                    sm:pl-6 md:pl-0 sm:table-cell hidden">Adet
                                    </th>

                                    <th scope="col" className="py-3.5 pt-4 text-left font-normal text-slate-700
                                    sm:pl-6 md:pl-0 sm:table-cell hidden">Toplam
                                    </th>


                                </tr>
                                </thead>
                                <tbody>
                                <tr className="border-b border-t border-slate-200">
                                    <td className="py-4 pr-3 ">
                                        <img className="w-12 h-12 object-cover"
                                             src="https://im.haberturk.com/2022/07/03/ver1656804033/3474668_1024x576.jpg"
                                             alt=""/>

                                    </td>
                                    <td className="py-4 pr-3 ">
                                    <span className="font-medium
                                    ">Karpuz</span>
                                    </td>
                                    <td className="py-4 pr-3 ">
                                    <span className="font-medium
                                    ">15₺</span>
                                    </td>
                                    <td className="py-4 pr-3">
                                    <span className="font-medium
                                    ">1</span>
                                    </td>
                                    <td className="py-4  text-end pr-3 ">
                                    <span className="font-medium
                                    ">15₺</span>
                                    </td>
                                </tr>
                                <tr className="border-b border-t border-slate-200">
                                    <td className="py-4 pr-3 ">
                                        <img className="w-12 h-12 object-cover"
                                             src="https://im.haberturk.com/2022/07/03/ver1656804033/3474668_1024x576.jpg"
                                             alt=""/>

                                    </td>
                                    <td className="py-4 pr-3 ">
                                    <span className="font-medium
                                    ">Karpuz</span>
                                    </td>
                                    <td className="py-4 pr-3 ">
                                    <span className="font-medium
                                    ">15₺</span>
                                    </td>
                                    <td className="py-4 pr-3">
                                    <span className="font-medium
                                    ">1</span>
                                    </td>
                                    <td className="py-4  text-end pr-3 ">
                                    <span className="font-medium
                                    ">15₺</span>
                                    </td>
                                </tr>
                                <tr className="border-b border-t border-slate-200">
                                    <td className="py-4 pr-3 ">
                                        <img className="w-12 h-12 object-cover"
                                             src="https://im.haberturk.com/2022/07/03/ver1656804033/3474668_1024x576.jpg"
                                             alt=""/>

                                    </td>
                                    <td className="py-4 pr-3 ">
                                    <span className="font-medium
                                    ">Karpuz</span>
                                    </td>
                                    <td className="py-4 pr-3 ">
                                    <span className="font-medium
                                    ">15₺</span>
                                    </td>
                                    <td className="py-4 pr-3">
                                    <span className="font-medium
                                    ">1</span>
                                    </td>
                                    <td className="py-4  text-end pr-3 ">
                                    <span className="font-medium
                                    ">15₺</span>
                                    </td>
                                </tr>


                                </tbody>

                                <tfoot className="">
                                <tr className="">
                                    <th className="pt-4 text-right" colSpan="4" scope="row">
                                        <span className="font-normal text-slate-700"> Ara Toplam </span>
                                    </th>
                                    <th className="pt-4 text-right pr-3" colSpan="4" scope="row">
                                        75₺
                                    </th>

                                </tr>
                                <tr className="">
                                    <th className="pt-6 text-right" colSpan="4" scope="row">
                                        <span className="font-normal text-slate-700"> KDV </span>
                                    </th>
                                    <th className="pt-4 text-right pr-3 text-red-600" colSpan="4" scope="row">
                                        +6₺
                                    </th>

                                </tr>
                                <tr className="">
                                    <th className="pt-4 text-right" colSpan="4" scope="row">
                                        <span className="font-normal text-slate-700">Toplam </span>
                                    </th>
                                    <th className="pt-4 text-right pr-3" colSpan="4" scope="row">
                                        81.00₺
                                    </th>

                                </tr>
                                </tfoot>
                            </table>
                            <div className="py-9">
                                <div className="border-t pt-9 border-slate-400">
                                    <p className="text-sm font-light text-slate-70">
                                        Aslında yazılım testini açıklayan birçok tanım yazabiliriz. En genel tanımıyla
                                        yazılım testi
                                        “bir yazılımın, kendisinden beklenen özellikleri karşılayıp karşılayamadığını
                                        incelemek amacıyla yapılan işlemlerdir.
                                        Bu şekilde yazılımdaki hatalar bulunup düzeltilebilir ve gereksinimlere uygun
                                        hale getirilebilir.”
                                    </p>

                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <div className="flex justify-end mt-4">
                <Button type="primary" size="large">Yazdır</Button>
            </div>
        </Modal>
    );
};

export default PrintBill;