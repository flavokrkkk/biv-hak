import { Select } from "antd";

const FilterBar = () => {
  return (
    <div className="flex text-[14px] flex-col h-[342px] shadow-md p-3 space-y-3 rounded-lg  bg-white">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between">
          <span className="font-bold">Фильтры</span>
          <span className="cursor-pointer">очистить</span>
        </div>

        <div className="flex flex-col space-y-2">
          <Select placeholder={"Продавец"} />
          <Select placeholder={"Статусы"} />
          <Select placeholder={"Должность"} />
          <Select placeholder={"Продукт"} />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
