import { FC, useState } from "react";
import { Button, DatePicker, Input, Select, Switch } from "antd";
import {
  PlusOutlined,
  ToolOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
interface IUnderwritingContent {}

export const UnderwritingContent: FC<IUnderwritingContent> = ({}) => {
  const [data, setData] = useState();

  return (
    <div className="w-[1140px] mx-auto ">
      <div className="flex gap-3 ml-auto w-fit">
        <div className="flex space-x-2 my-auto h-fit">
          <div className="text-black">Андеррайтинг</div>
          <Switch />
        </div>
        <Button variant="solid" color="primary" icon={<PlusOutlined />}>
          Добавить
        </Button>
        <Button
          variant="solid"
          color="primary"
          className="bg-[#2b2b2b]"
          icon={<UnorderedListOutlined />}
        >
          Выбрать
        </Button>
        <Button
          variant="solid"
          color="primary"
          className="bg-[#f2f2f2] border-[#d9d9d9] text-black"
          icon={<ToolOutlined />}
        >
          Редактировать
        </Button>
      </div>
      <div className="bg-white rounded-lg flex space-x-7 pl-6 py-7 mt-4">
        <div className="flex flex-col space-y-5 w-fit">
          <div className="text-gray-800 text-2xl font-semibold">
            Настройка андеррайтинга
          </div>
          <Select placeholder="Калькулятор" className="w-[27vw]" size="large" />
          <Select
            placeholder="Проверка лимитов по справочнику"
            className="w-[27vw]"
            size="large"
          />
          <Input placeholder="Стоимость " className="w-[27vw]" size="large" />
          <DatePicker placeholder="Срок" className="w-[27vw]" size="large" />
          <Select placeholder="Тип объекта" className="w-[27vw]" size="large" />
          <Select placeholder="Регион" className="w-[27vw]" size="large" />
        </div>
        <div className="flex flex-col  ">
          <div className="text-gray-800 text-2xl font-semibold mb-5">
            Финансовые лимиты
          </div>
          <div className="flex flex-col space-y-5">
            <Input
              placeholder="Порог суммы для активации автолизинга"
              className="w-[27vw]"
              size="large"
            />
            <Input
              placeholder="Минимальная сумма для активации автолизинга"
              className="w-[27vw]"
              size="large"
            />
            <Select
              placeholder="Проверка лимитов по скрипту"
              className="w-[27vw]"
              size="large"
            />
          </div>
          <div className="text-gray-800 text-2xl font-semibold my-6">
            Письма
          </div>
          <div className="flex flex-col space-y-5">
            <Select
              placeholder="Выбрать шаблон"
              className="w-[27vw]"
              size="large"
            />
            <Input
              placeholder="Ссылка на продукт"
              className="w-[27vw]"
              size="large"
            />
          </div>
          <Button
            className="mt-12"
            variant="dashed"
            color="default"
            size="large"
          >
            Сохранить пресет
          </Button>
        </div>
      </div>
    </div>
  );
};
