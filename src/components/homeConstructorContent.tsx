import {
  PlusOutlined,
  ToolOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { ICreateInsuranceData } from "@models/common";
import { Button, DatePicker, Input, Select } from "antd";
import Modal from "antd/es/modal/Modal";
import { useState } from "react";

const HomeConstructorContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<ICreateInsuranceData>({
    name: "",
    description: "",
    typeInsurance: "",
    targetAudience: [""],
    objectInsurance: "",
    riskInsurance: "",
    conditionsInsurance: "",
    maxAmount: 0,
    amount: 0,
  });
  const toggleModal = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <div className="flex flex-col space-y-4 h-full">
        <section className="flex justify-end">
          <div className="flex space-x-2">
            <Button
              variant="solid"
              color="primary"
              icon={<PlusOutlined />}
              onClick={toggleModal}
            >
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
        </section>

        <div className="bg-white flex justify-between p-5 space-x-4">
          <div className="flex flex-col space-y-2  w-full">
            <h1 className="font-medium">Создание продукта</h1>
            <div className="flex flex-col space-y-4  mr-auto mt-2">
              <div className="w-full flex gap-10">
                <Input
                className="w-[30vw]"
                  size="large"
                  placeholder="Название продукта"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <div>Название продукта</div>
              </div>
              <div className="w-full flex gap-10">
                <Input
                className="w-[30vw]"
                  size="large"
                  placeholder="Описание"
                  value={data.description}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                />
                <div>Описание</div>
              </div>
              <div className="w-full flex gap-10">
                <Select
                className="w-[30vw]"
                  size="large"
                  placeholder="Тип страхования"
                  value={data.typeInsurance}
                  // onChange={e => setData({...data, name:e.target.value})}
                />
                <div>Тип страхования</div>
              </div>
              <div className="w-full flex gap-10">
                <Select
                className="w-[30vw]"
                  size="large"
                  placeholder="Целевая аудитория"
                  value={data.targetAudience}
                />
                <div>Целевая аудитория</div>
              </div>
              <div className="w-full flex gap-10">
                <Select
                className="w-[30vw]"
                  size="large"
                  placeholder="Объект страхования"
                  value={data.objectInsurance}
                />
                <div>Объект страхования</div>
              </div>
              <div className="w-full flex gap-10">
                <Select
                className="w-[30vw]"
                  size="large"
                  placeholder="Риск страхования"
                  value={data.riskInsurance}
                />
                <div>Риск страхования</div>
              </div>
              <div className="w-full flex gap-10">
                <Input
                className="w-[30vw]"
                  size="large"
                  placeholder="Условия покрытия"
                  value={data.conditionsInsurance}
                  onChange={(e) =>
                    setData({ ...data, conditionsInsurance: e.target.value })
                  }
                />
                <div>Условия покрытия</div>
              </div>
              <div className="w-full flex gap-10">
                <Input
                className="w-[30vw]"
                  size="large"
                  placeholder="Максимальная страховая сумма"
                  type="number"
                  value={data.maxAmount}
                  onChange={(e) =>
                    setData({ ...data, maxAmount: parseInt(e.target.value) })
                  }
                />
                <div>Максимальная страховая сумма</div>
              </div>
              <div className="w-full flex gap-10">
                <Input
                className="w-[30vw]"
                  size="large"
                  placeholder="Стоимость страхования"
                  type="number"
                  value={data.amount}
                  onChange={(e) =>
                    setData({ ...data, amount: parseInt(e.target.value) })
                  }
                />
                <div>Стоимость страхования</div>
              </div>
              {/* <Input size="large" placeholder="Список исключения" /> */}
              <DatePicker size="large" placeholder="" />
              <DatePicker size="large" />
            </div>
          </div>
          {/* <div className="flex flex-col space-y-2 w-full">
            <h1 className="font-medium">Серия и номер полиса</h1>
            <div className="flex flex-col space-y-4">
              <Input size="large" placeholder="Название" />
              <Input size="large" placeholder="Название" />
              <Input size="large" placeholder="Название" />
            </div>
          </div> */}
        </div>
      </div>
      <Modal open={isOpen} onCancel={toggleModal} footer={null}>
        <section className="flex flex-col space-y-4">
          <h1 className="font-medium text-xl">Добавление параметра</h1>

          <section className="flex space-x-2">
            <div className="flex flex-col space-y-4 w-full">
              <Input size="large" placeholder="Название" />
              <Select size="large" placeholder="" />
              <Select size="large" />
            </div>
            <div className="flex flex-col space-y-4 w-full">
              <Select size="large" placeholder="Выбрать вид" />
            </div>
          </section>
          <div>
            <Button variant="outlined" color="primary" icon={<PlusOutlined />}>
              Добавить
            </Button>
          </div>
        </section>
        <div className="mt-16 flex space-x-2">
          <Button variant="solid" color="primary">
            Сохраниь
          </Button>
          <Button variant="solid" color="primary">
            Отмена
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default HomeConstructorContent;
