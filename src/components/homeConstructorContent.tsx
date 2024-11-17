import { PlusOutlined } from "@ant-design/icons";
import { useActions } from "@hooks/useActions";
import { useAppSelector } from "@hooks/useAppSelector";
import { ICreateInsuranceData } from "@models/common";
import { authSelector } from "@redux/selectors";
import { objectInsurance, risks } from "@utils/insurancedata";
import { Button, DatePicker, Input, Select } from "antd";
import Modal from "antd/es/modal/Modal";
import { FormEvent, useMemo, useState } from "react";

const HomeConstructorContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Omit<ICreateInsuranceData, "companyId">>({
    name: "",
    description: "",
    objectInsurance: "Объект страхования",
    riskInsurance: "Риск страхования",
    conditionsInsurance: "",
    maxAmount: 0,
    amount: 0,
    expiresIn: null,
    duration: 0,
  });
  const toggleModal = () => setIsOpen((prevState) => !prevState);
  const { user } = useAppSelector(authSelector);
  const { createInsurance } = useActions();

  const insurance = useMemo(() => objectInsurance, []);

  const risksOptions = useMemo(() => risks, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user?.id) {
      createInsurance({ ...data, companyId: user?.id });
      setData({
        name: "",
        description: "",
        objectInsurance: "",
        riskInsurance: "",
        conditionsInsurance: "",
        maxAmount: 0,
        amount: 0,
        expiresIn: null,
        duration: 0,
      });
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-4 h-full p-4 w-[1140px] mx-auto">
        <section className="flex justify-end"></section>
        <form onSubmit={onSubmit}>
          <div className="bg-white flex justify-between p-6 rounded-lg space-x-4">
            <div className="flex flex-col w-full">
              <h1 className="font-medium text-2xl mb-4">О продуктe</h1>
              <div className="mr-auto flex flex-col space-y-3">
                <div className="w-full flex flex-col space-y-1">
                  <label>
                    Название продукта
                    <span className="text-red-700 font-semibold text-base">
                      *
                    </span>
                  </label>
                  <Input
                    required
                    className="w-[27vw]"
                    size="large"
                    placeholder="Название продукта"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                </div>
                <div className="w-full flex  flex-col space-y-1">
                  <label>
                    Описание
                    <span className="text-red-700 font-semibold text-base">
                      *
                    </span>
                  </label>
                  <Input
                    required
                    className="w-[27vw]"
                    size="large"
                    placeholder="Описание"
                    value={data.description}
                    onChange={(e) =>
                      setData({ ...data, description: e.target.value })
                    }
                  />
                </div>
                <div className="w-full flex flex-col space-y-1 ">
                  <label>
                    Объект страхования
                    <span className="text-red-700 font-semibold text-base">
                      *
                    </span>
                  </label>
                  <Select
                    className="w-[27vw]"
                    size="large"
                    placeholder="Объект страхования"
                    value={data.objectInsurance}
                    options={insurance}
                  />
                </div>
                <div className="w-full flex flex-col space-y-1">
                  <label>
                    Риск страхования
                    <span className="text-red-700 font-semibold text-base">
                      *
                    </span>
                  </label>
                  <Select
                    className="w-[27vw]"
                    size="large"
                    placeholder="Риск страхования"
                    options={risksOptions}
                    value={data.riskInsurance}
                  />
                </div>
                <div className="w-full flex flex-col space-y-1">
                  <label>
                    Условия покрытия
                    <span className="text-red-700 font-semibold text-base">
                      *
                    </span>
                  </label>
                  <Input
                    required
                    className="w-[27vw]"
                    size="large"
                    placeholder="Условия покрытия"
                    value={data.conditionsInsurance}
                    onChange={(e) =>
                      setData({ ...data, conditionsInsurance: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col  w-full space-y-4 mt-12">
              <div className=" flex flex-col space-y-3">
                <div className="w-full flex flex-col space-y-1">
                  <label>
                    Максимальная страховая сумма
                    <span className="text-red-700 font-semibold text-base">
                      *
                    </span>
                  </label>
                  <Input
                    required
                    className="w-[27vw]"
                    size="large"
                    placeholder="Максимальная страховая сумма"
                    type="number"
                    defaultValue={data.maxAmount}
                    onChange={(e) =>
                      setData({ ...data, maxAmount: parseInt(e.target.value) })
                    }
                  />
                </div>
                <div className="w-full flex flex-col space-y-1">
                  <label>
                    Стоимость страхования
                    <span className="text-red-700 font-semibold text-base">
                      *
                    </span>
                  </label>
                  <Input
                    required
                    className="w-[27vw]"
                    size="large"
                    placeholder="Стоимость страхования"
                    type="number"
                    value={data.amount}
                    onChange={(e) =>
                      setData({ ...data, amount: +e.target.value })
                    }
                  />
                </div>

                <div className="w-full flex flex-col space-y-1">
                  <label>
                    Длительность страхования (в днях)
                    <span className="text-red-700 font-semibold text-base">
                      *
                    </span>
                  </label>
                  <Input
                    required
                    className="w-[27vw]"
                    size="large"
                    placeholder="Длительность страхования (в днях)"
                    type="number"
                    defaultValue={data.duration}
                    onChange={(e) =>
                      setData({ ...data, duration: +e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col space-y-1 w-[27vw]">
                  <label>Дата окончания</label>
                  <DatePicker
                    value={data.expiresIn}
                    size="large"
                    placeholder=""
                    onChange={(e) => {
                      setData({ ...data, expiresIn: e });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full mt-3">
            <Button
              size="large"
              variant="solid"
              color="primary"
              htmlType="submit"
              className=" rounded-xl w-full"
            >
              Создать
            </Button>
          </div>
        </form>
        <div></div>
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
            Сохранить
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
