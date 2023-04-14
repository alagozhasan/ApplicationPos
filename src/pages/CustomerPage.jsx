import React, {Component, useState} from 'react';
import Header from "../Components/Header/Header";
import {Button, Card, Table} from "antd";

const CustomerPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dataSource = [
        {
            key: "1",
            name: "Mike",
            age: 32,
            address: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            age: 42,
            address: "10 Downing Street",
        },
    ];

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
    ];

    console.log(isModalOpen);

    return (
        <>
            <Header />
            <div className="px-6">
                <h1 className="text-4xl font-bold text-center mb-6">Müşteriler</h1>

                <Table
                    dataSource={dataSource}
                    columns={columns}
                    bordered
                    pagination={false}
                />

            </div>
        </>
    );
};

export default CustomerPage;