import { PlusOutlined } from "@ant-design/icons";
import { useActions } from "@hooks/useActions";
import { useAppSelector } from "@hooks/useAppSelector";
import { ICreateInsuranceData } from "@models/common";
import { authSelector } from "@redux/selectors";
import { objectInsurance, risks } from "@utils/insurancedata";
import { Button, DatePicker, Input, Select } from "antd";
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react";

const HomeConstructorContent = () => {
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
  const { user } = useAppSelector(authSelector);
  const { createInsurance } = useActions();

  const insurance = useMemo(() => objectInsurance, []);

  const risksOptions = useMemo(() => risks, []);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleChangeDate = (e: Date) => {
    setData((prevState) => ({ ...prevState, expiresIn: e }));
  };

  const handleChangeSelect = (value: string, key: string) => {
    setData((prevState) => ({ ...prevState, [key]: value }));
  };

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
                    name="name"
                    onChange={handleChange}
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
                    name="description"
                    value={data.description}
                    onChange={handleChange}
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
                    onChange={(value) =>
                      handleChangeSelect(value, "objectInsurance")
                    }
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
                    onChange={(value) =>
                      handleChangeSelect(value, "riskInsurance")
                    }
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
                    name="conditionsInsurance"
                    placeholder="Условия покрытия"
                    value={data.conditionsInsurance}
                    onChange={handleChange}
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
                    name="maxAmount"
                    defaultValue={data.maxAmount}
                    onChange={handleChange}
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
                    name="amount"
                    value={data.amount}
                    onChange={handleChange}
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
                    name="duration"
                    defaultValue={data.duration}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col space-y-1 w-[27vw]">
                  <label>Дата окончания</label>
                  <DatePicker
                    value={data.expiresIn}
                    size="large"
                    name="expiresIn"
                    placeholder=""
                    onChange={handleChangeDate}
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
      </div>
    </>
  );
};

export default HomeConstructorContent;
