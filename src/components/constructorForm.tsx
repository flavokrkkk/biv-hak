import { ICreateInsuranceData } from "@models/common";
import { Button, DatePicker, Select } from "antd";
import Input from "antd/es/input/Input";
import { DefaultOptionType } from "antd/es/select";
import { ChangeEvent, FC, FormEvent } from "react";

interface IConstructorForm {
  data: Omit<ICreateInsuranceData, "companyId">;
  handleChangeDate: (e: Date) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  options: {
    risksOptions: DefaultOptionType[];
    insurance: DefaultOptionType[];
  };
  handleChangeSelect: (value: string, key: string) => void;
}

const ConstructorForm: FC<IConstructorForm> = ({
  handleChange,
  handleChangeDate,
  onSubmit,
  options: { insurance, risksOptions },
  data,
  handleChangeSelect,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="bg-white flex justify-between p-6 rounded-lg space-x-4">
        <div className="flex flex-col w-full">
          <h1 className="font-medium text-2xl mb-4">О продуктe</h1>
          <div className="mr-auto flex flex-col space-y-3">
            <div className="w-full flex flex-col space-y-1">
              <label>
                Название продукта
                <span className="text-red-700 font-semibold text-base">*</span>
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
                <span className="text-red-700 font-semibold text-base">*</span>
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
                <span className="text-red-700 font-semibold text-base">*</span>
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
                <span className="text-red-700 font-semibold text-base">*</span>
              </label>
              <Select
                className="w-[27vw]"
                size="large"
                placeholder="Риск страхования"
                options={risksOptions}
                value={data.riskInsurance}
                onChange={(value) => handleChangeSelect(value, "riskInsurance")}
              />
            </div>
            <div className="w-full flex flex-col space-y-1">
              <label>
                Условия покрытия
                <span className="text-red-700 font-semibold text-base">*</span>
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
                <span className="text-red-700 font-semibold text-base">*</span>
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
                <span className="text-red-700 font-semibold text-base">*</span>
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
                <span className="text-red-700 font-semibold text-base">*</span>
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
    </form>
  );
};

export default ConstructorForm;
