import FilterLayout from "@views/layout/filterLayout";
import { Select } from "antd";

const FilterBar = () => {
  return (
    <FilterLayout>
      <div className="flex flex-col space-y-2">
        <Select placeholder={"Продавец"} />
        <Select placeholder={"Статусы"} />
        <Select placeholder={"Должность"} />
        <Select placeholder={"Продукт"} />
      </div>
    </FilterLayout>
  );
};

export default FilterBar;
