import { Button, Modal } from "antd";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
const PrintBill = ({ isModalOpen, setIsModalOpen, customer }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Modal
      width={800}
      title="Fatura Yazdır"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <section className="py-20 bg-black"ref={componentRef}>
        <div className="max-w-5xl mx-auto bg-white pc-6">
          <article className="overflow-hidden">
            <div className="logo my-6">
              <h2 className="text-4xl font-bold text-slate-700 ">Logo</h2>
            </div>
            <div className="bill-details ">
              <div className="grid grid-cols-4 gap12">
                <div className="text-md text-slate-500">
                  <b>Fatura Detayı : </b>
                  <p>{customer?.customerName}</p>
                  <p>Telefon Numarası :</p>
                  <p>{customer?.customerPhoneNumber}</p>
                  <p>Ödeme Yöntemi :</p>
                  <p>{customer?.paymentMethod}</p>
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
                  <p>{Math.floor(Math.random() * 100)}</p>
                  <br></br>
                  <b>Tarih detay :</b>
                  <p>{customer?.createdAt?.substring(0, 10)}</p>
                </div>

                <div className="text-md text-slate-500">
                  <b>Taksit : </b>
                  <p>10 Gün</p>
                  <br></br>
                  <b>Vade Başlangıç : </b>
                  <p>{customer?.createdAt?.substring(0, 10)}</p>
                </div>
              </div>
            </div>
            <div className="bill-tabel-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pt-4 text-left font-normal text-slate-700
                                    sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Görsel
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 pt-4 text-left font-normal text-slate-700
                                    sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Başlık
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 pt-4 text-left font-normal text-slate-700
                                    sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Fiyat
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 pt-4 text-left font-normal text-slate-700
                                    sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Adet
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 pt-4 text-left font-normal text-slate-700
                                    sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Toplam
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customer?.cartItems?.map((item) => (
                    <tr className="border-b border-t border-slate-200">
                      <td className="py-4 pr-3 ">
                        <img
                          className="w-12 h-12 object-cover"
                          src={item.img}
                          alt=""
                        />
                      </td>
                      <td className="py-4 pr-3 ">
                        <span
                          className="font-medium
                        "
                        >
                          {item.title}
                        </span>
                      </td>
                      <td className="py-4 pr-3 ">
                        <span
                          className="font-medium
                        "
                        >
                          {item.price}₺
                        </span>
                      </td>
                      <td className="py-4 pr-3">
                        <span
                          className="font-medium
                        "
                        >
                          {item.quantity}
                        </span>
                      </td>
                      <td className="py-4  text-end pr-3 ">
                        <span
                          className="font-medium
                        "
                        >
                          {item.price * item.quantity}₺
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>

                <tfoot className="">
                  <tr className="">
                    <th className="pt-4 text-right" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">
                        {" "}
                        Ara Toplam{" "}
                      </span>
                    </th>
                    <th
                      className="pt-4 text-right pr-3"
                      colSpan="4"
                      scope="row"
                    >
                      {customer.subTotal}₺
                    </th>
                  </tr>
                  <tr className="">
                    <th className="pt-6 text-right" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700"> KDV </span>
                    </th>
                    <th
                      className="pt-4 text-right pr-3 text-red-600"
                      colSpan="4"
                      scope="row"
                    >
                      +{customer.tax}₺
                    </th>
                  </tr>
                  <tr className="">
                    <th className="pt-4 text-right" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">
                        Toplam{" "}
                      </span>
                    </th>
                    <th
                      className="pt-4 text-right pr-3"
                      colSpan="4"
                      scope="row"
                    >
                      {customer.totalAmount?.toFixed(2)}₺
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="border-t pt-9 border-slate-400">
                  <p className="text-sm font-light text-slate-70">
                    Aslında yazılım testini açıklayan birçok tanım yazabiliriz.
                    En genel tanımıyla yazılım testi “bir yazılımın, kendisinden
                    beklenen özellikleri karşılayıp karşılayamadığını incelemek
                    amacıyla yapılan işlemlerdir. Bu şekilde yazılımdaki hatalar
                    bulunup düzeltilebilir ve gereksinimlere uygun hale
                    getirilebilir.”
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="flex justify-end mt-4">
        <Button type="primary" size="large"
        onClick={handlePrint}
        >
          Yazdır
        </Button>
      </div>
    </Modal>
  );
};

export default PrintBill;
