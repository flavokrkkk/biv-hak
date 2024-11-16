import {
  PlusOutlined,
  ToolOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, Select } from "antd";
import React from "react";

const CarContact = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="font-medium text-lg">Информация об автомобиле</h1>
      <div className="flex space-x-2">
        <Button variant="solid" color="primary" icon={<PlusOutlined />}>
          Добавить
        </Button>
        <Button
          variant="solid"
          color="primary"
          icon={<UnorderedListOutlined />}
        >
          Выбрать
        </Button>
        <Button variant="solid" color="primary" icon={<ToolOutlined />}>
          Редактировать
        </Button>
      </div>
      <div className="flex flex-col space-y-2 w-[390px]">
        <div className="flex flex-col">
          <label className="mb-1">Марка, модель, год*</label>
          <Select size="large" />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Мощность*</label>
          <Select size="large" />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Тип топлива*</label>
          <Select size="large" />
        </div>
      </div>
    </div>
  );
};

export default CarContact;
