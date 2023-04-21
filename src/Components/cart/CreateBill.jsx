import { Button, Card, Form, Input, Modal, Select, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const onFinish = async (values) => {
    try {
      const res = await fetch("http://localhost:5000/api/bills/add-bill", {
        method: "POST",
        body: JSON.stringify({
          ...values,
          subTotal: cart.total,
          tax: ((cart.total * cart.tax) / 100).toFixed(2),
          totalAmount: (cart.total + (cart.total * cart.tax) / 100).toFixed(2),
          cartItems: cart.cartItems,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }); 
      if (res.status === 200) {
        message.success("Fatura başarıyla kaydedildi.");
        dispatch(reset());
        navigate("/faturalar");
      }
    } catch (error) {
      message.danger("Birşeyler ters gitti.");
      console.log(error);
    }
  };

  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout={"vertical"} onFinish={onFinish}>
        <Form.Item
          label="Müşteri adı"
          name={"customerName"}
          rules={[
            { required: true, message: "Bu alanın doldurulması zorunludur" },
          ]}
        >
          <Input placeholder="Müşteri Adı Yazınız" />
        </Form.Item>
        <Form.Item
          label="Telefon Numarası"
          name={"customerPhoneNumber"}
          rules={[{ required: true, message: "Bu alanın doldurulmas gerekir" }]}
        >
          <Input placeholder="05123456789" maxLength={11} />
        </Form.Item>
        <Form.Item
          label="Ödeme Yöntemi"
          name={"paymentMethod"}
          rules={[
            { required: true, message: "Bu alanın doldurulması zorunludur" },
          ]}
        >
          <Select placeholder="Ödeme Yöntemi Seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kart">Kart</Select.Option>
          </Select>
        </Form.Item>

        <Card className="">
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

          <div className="">
            <Button
              className="mt-4 w-full"
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
              htmlType="submit"
            >
              Siparişi Tamamla
            </Button>
          </div>
        </Card>
      </Form>
    </Modal>
  );
};

export default CreateBill;
