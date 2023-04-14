import {Button, Card, Form, Input, Modal, Select} from "antd";

const CreateBill = ({isModalOpen, setIsModalOpen}) => {
    const onFinish = (values) => {
        console.log("Received values of form : ", values);
    }
    return (

        <Modal
            title="Fatura Oluştur"
            open={isModalOpen}
            footer={false}
            onCancel={() => setIsModalOpen(false)}

        >
            <Form layout={"vertical"} onFinish={onFinish}>
                <Form.Item label="Müşteri adı"
                           name={"customerName"}
                           rules={[{required: true, message: "Bu alanın doldurulması zorunludur"}]}>
                    <Input placeholder="Müşteri Adı Yazınız"/>
                </Form.Item>
                <Form.Item label="Telefon Numarası"
                           name={"phoneNo"}
                           rules={[{required: true,message:"Bu alanın doldurulmas gerekir"}]}>
                    <Input placeholder="05123456789"
                           maxLength={11}  />
                </Form.Item>
                <Form.Item label="Ödeme Yöntemi"
                           name={"payMethod"}
                           rules={[{required: true, message: "Bu alanın doldurulması zorunludur"}]}>
                    <Select placeholder="Ödeme Yöntemi Seçiniz">
                        <Select.Option value="Nakit">Nakit</Select.Option>
                        <Select.Option value="Kart">Kart</Select.Option>
                    </Select>
                </Form.Item>

                <Card className="">
                    <div className="flex justify-between">
                        <span>Ara Toplam</span>
                        <span>549.00₺</span>
                    </div>
                    <div className="flex justify-between my-2">
                        <span>KDV Toplam %8</span>
                        <span className="text-red-600">+43.92₺</span>
                    </div>
                    <div className="flex justify-between">
                        <b>Toplam</b>
                        <b>592.92₺</b>
                    </div>
                    <div className="">
                        <Button
                            className="mt-4 w-full"
                            type="primary"
                            size="large"
                            onClick={() =>
                                setIsModalOpen(true)}
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