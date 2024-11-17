import {
  CloseOutlined,
  EyeInvisibleOutlined,
  PlusOutlined,
  SaveOutlined,
  ToolOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { rootCheck } from "@helpers/rootCheck";
import { useActions } from "@hooks/useActions";
import { useAppSelector } from "@hooks/useAppSelector";
import { ICreateInsuranceData } from "@models/common";
import { authSelector } from "@redux/selectors";
import { objectInsurance, risks } from "@utils/insurancedata";
import {
  Button,
  DatePicker,
  Input,
  message,
  Modal,
  Select,
  Steps,
  Switch,
} from "antd";
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react";
import HomeConstructorPanel from "./homeConstructorPanel";
import { DefaultOptionType } from "antd/es/select";
import ConstructorForm from "./constructorForm";

const HomeConstructorContent = () => {
  const [isOpen, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
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

  const [params, setParamsValue] = useState<{ value: string; private: string }>(
    { private: "", value: "" }
  );

  const [parametres, addParametres] = useState<
    { value: string; private: string }[]
  >([]);

  const { user } = useAppSelector(authSelector);
  const { createInsurance } = useActions();

  const insurance = useMemo(() => objectInsurance, []);

  const risksOptions = useMemo(() => risks, []);

  const privateOptions = useMemo(
    () =>
      [
        { label: "Всем", value: "Всем" },
        { label: "Страховые агенты", value: "Страховые агенты" },
        { label: "Розничные магазины", value: "Розничные магазины" },
        { label: "Банки", value: "Банки" },
      ] as DefaultOptionType[],
    []
  );

  const handleAddParams = () => {
    if (!params.private.length || !params.value.length) {
      message.info("Заполните все поля!");
      return;
    }
    addParametres((prevState) => [...prevState, { ...params }]);
  };

  const handleDeleteParams = (event: React.MouseEvent<HTMLButtonElement>) => {
    const index = event.currentTarget?.value;
    if (index === undefined || index === null) return;
    addParametres((prevState) => prevState.filter((_, i) => i !== +index));
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setParamsValue((prevState) => ({
      ...prevState,
      value: event.target.value,
    }));
  };
  const onSelect = (value: string) => {
    setParamsValue((prevState) => ({ ...prevState, private: value }));
  };

  const checkRoot = rootCheck();

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  //

  const toggleModal = useCallback(() => {
    setOpen((prevState) => !prevState);
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

  const steps = [
    {
      title: "First",
      content: (
        <ConstructorForm
          data={data}
          options={{ insurance, risksOptions }}
          onSubmit={onSubmit}
          handleChange={handleChange}
          handleChangeDate={handleChangeDate}
          handleChangeSelect={handleChangeSelect}
        />
      ),
    },
    {
      title: "Second",
      content: (
        <ConstructorForm
          data={data}
          options={{ insurance, risksOptions }}
          onSubmit={onSubmit}
          handleChange={handleChange}
          handleChangeDate={handleChangeDate}
          handleChangeSelect={handleChangeSelect}
        />
      ),
    },
    {
      title: "Last",
      content: (
        <ConstructorForm
          data={data}
          options={{ insurance, risksOptions }}
          onSubmit={onSubmit}
          handleChange={handleChange}
          handleChangeDate={handleChangeDate}
          handleChangeSelect={handleChangeSelect}
        />
      ),
    },
  ].map((item) => ({
    key: item.title,
    title: item.title,
    content: item.content,
  }));

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div className="w-[1140px] mx-auto flex flex-col space-y-3 ">
        {checkRoot && <HomeConstructorPanel toggleModal={toggleModal} />}
        <Steps current={current} items={steps} />
        {steps[current].content}
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
        {/* <ConstructorForm
          data={data}
          options={{ insurance, risksOptions }}
          onSubmit={onSubmit}
          handleChange={handleChange}
          handleChangeDate={handleChangeDate}
          handleChangeSelect={handleChangeSelect}
        /> */}
        {/* <form onSubmit={onSubmit}>
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
          <div className=" w-full mt-5">
            <Button
              className="w-full"
              variant="dashed"
              color="primary"
              size="large"
              htmlType="submit"
            >
              Сохранить пресет
            </Button>
          </div>
        </form> */}
      </div>
      <Modal open={isOpen} onCancel={toggleModal} footer={null}>
        <section className="flex flex-col space-y-4">
          <h1 className="font-medium text-xl">Добавление параметра</h1>
          <div className="flex w-[435px] space-x-4">
            <section className="flex space-x-2 items-center w-full">
              <div className="flex flex-col space-y-4 w-full">
                <Input
                  placeholder="Название"
                  onChange={handleChangeValue}
                  required
                />
              </div>
              <div className="flex flex-col space-y-4 w-full">
                <Select
                  placeholder="Кому виден"
                  options={privateOptions}
                  onSelect={onSelect}
                />
              </div>
            </section>
            <div>
              <Button
                variant="outlined"
                color="primary"
                icon={<PlusOutlined />}
                onClick={handleAddParams}
              />
            </div>
          </div>
          <hr />
          {parametres.map((param, index) => (
            <div key={index} className="flex w-full items-center space-x-4">
              <div className="w-full">
                <Input placeholder={param.value} value={param.value} required />
              </div>
              <div className="w-full">
                <Input
                  placeholder={param.private}
                  value={param.private}
                  required
                />
              </div>
              <div className="flex space-x-1">
                <Button
                  icon={<CloseOutlined />}
                  variant="solid"
                  color="danger"
                  value={index.toString()}
                  onClick={handleDeleteParams}
                />
                <Button icon={<EyeInvisibleOutlined />} />
              </div>
            </div>
          ))}
        </section>
        <div className="mt-16 flex space-x-2">
          <Button variant="solid" color="primary" icon={<SaveOutlined />}>
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
