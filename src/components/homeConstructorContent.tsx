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
      <div className="flex flex-col space-y-4 h-full p-4">
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

        <div className="bg-white flex justify-between p-5 ">
          <div className="flex flex-col w-full">
            <h1 className="font-medium text-2xl mb-4">Создание продукта</h1>
            <div className="mr-auto flex flex-col space-y-3">
              <div className="w-full flex flex-col space-y-1">
                <label>Название продукта</label>
                <Input
                  className="w-[30vw]"
                  size="large"
                  placeholder="Название продукта"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div className="w-full flex  flex-col space-y-1">
                <label>Описание</label>
                <Input
                  className="w-[30vw]"
                  size="large"
                  placeholder="Описание"
                  value={data.description}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label>Дата окончания</label>
                <DatePicker size="large" placeholder="" />
              </div>

              <div className="w-full flex  flex-col space-y-1">
                <label>Тип страхования</label>
                <Select
                  className="w-[30vw]"
                  size="large"
                  placeholder="Тип страхования"
                  value={data.typeInsurance}
                  // onChange={e => setData({...data, name:e.target.value})}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-full space-y-4">
            <h1 className="font-medium text-2xl">Серия и номер полиса</h1>
            <div className=" flex flex-col space-y-3">
              <div className="w-full flex flex-col space-y-1">
                <label>Условия покрытия</label>
                <Input
                  className="w-[30vw]"
                  size="large"
                  placeholder="Условия покрытия"
                  value={data.conditionsInsurance}
                  onChange={(e) =>
                    setData({ ...data, conditionsInsurance: e.target.value })
                  }
                />
              </div>
              <div className="w-full flex flex-col space-y-1">
                <label>Максимальная страховая сумма</label>
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
              </div>
              <div className="w-full flex flex-col space-y-1">
                <label>Стоимость страхования</label>
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
              </div>
              <div className="w-full flex flex-col space-y-1">
                <label>Объект страхования</label>
                <Select
                  className="w-[30vw]"
                  size="large"
                  placeholder="Объект страхования"
                  value={data.objectInsurance}
                />
              </div>
              <div className="w-full flex flex-col space-y-1">
                <label>Риск страхования</label>
                <Select
                  className="w-[30vw]"
                  size="large"
                  placeholder="Риск страхования"
                  value={data.riskInsurance}
                />
              </div>
            </div>
          </div>
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
