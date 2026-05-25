import { Button, Form, Input, InputNumber, Select, Table } from "antd";
import { useState } from "react";

export const Wizard = () => {
  const [submitted, setSubmitted] = useState(null);

  const [form] = Form.useForm();

  const handelSubmit = () => {
    setSubmitted(null);
    form.resetFields();
  };

  const finishForm = (values) => {
    setSubmitted(values);
  };

  if (submitted !== null) {
    return (
      <>
        <Table
          dataSource={[
            { label: "Ім'я", value: submitted.name },
            { label: "Пошта", value: submitted.email },
            { label: "Країна", value: submitted.country },
            { label: "Вік", value: submitted.age },
          ]}
          columns={[
            { title: "Поле", dataIndex: "label" },
            { title: "Значення", dataIndex: "value" },
          ]}
          rowKey="label"
          pagination={false}
        />

        <Button onClick={handelSubmit}>Почати заново</Button>
      </>
    );
  }
  return (
    <Form form={form} onFinish={finishForm}>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Введіть Ім'я",
            min: 2,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            message: "Введіть пошту",
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="country"
        label="Country"
        rules={[
          {
            required: true,
            message: "Виберіть Країну",
          },
        ]}
      >
        <Select
          options={[
            {
              value: "ua",
              label: "Ukraine",
            },
            {
              value: "us",
              label: "USA",
            },
            {
              value: "uk",
              label: "United Kingdom",
            },
            {
              value: "fr",
              label: "France",
            },
            {
              value: "de",
              label: "Germany",
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        name="age"
        label="Age"
        rules={[
          {
            type: "number",
            min: 18,
            max: 100,
            required: true,
            message: "Введіть Вік",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Відправити
      </Button>
    </Form>
  );
};
