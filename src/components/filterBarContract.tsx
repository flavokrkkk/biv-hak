import { useActions } from "@hooks/useActions";
import FilterLayout from "@views/layout/filterLayout";
import { Select } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { useMemo } from "react";

const FilterBarContract = () => {
  const { setFilterInsurances } = useActions();

  const { objectIsuranceOptions, termOptions, formInsurance } = useMemo(() => {
    const objectIsuranceOptions = [
      { label: "Здоровье", value: "Здоровье" },
      { label: "Путешествиe", value: "Путешествиe" },
      { label: "Жильё", value: "Жильё" },
      { label: "Животные", value: "Животные" },
    ] as DefaultOptionType[];

    const termOptions = [
      { label: "Долгосрочный", value: "Долгосрочный" },
      { label: "Краткосрочный", value: "Краткосрочный" },
      { label: "Годовой", value: "Годовой" },
      { label: "Однократный", value: "Однократный" },
    ] as DefaultOptionType[];
    const formInsurance = [
      { label: "Долгосрочная", value: "Долгосрочная" },
      { label: "Краткосрочная", value: "Краткосрочная" },
      { label: "Годовая", value: "Годовая" },
      { label: "Однократная", value: "Однократная" },
    ] as DefaultOptionType[];
    return { objectIsuranceOptions, termOptions, formInsurance };
  }, []);

  return (
    <FilterLayout>
      <div className="flex flex-col space-y-2">
        <Select
          options={objectIsuranceOptions}
          placeholder={"Объект страхования"}
          onSelect={setFilterInsurances}
        />
        <Select
          placeholder={"Срок"}
          options={termOptions}
          onSelect={setFilterInsurances}
        />
        <Select
          placeholder={"Форма страхования"}
          options={formInsurance}
          onSelect={setFilterInsurances}
        />
        <Select placeholder={"Тип покрытия"} />
        <Select placeholder={"Способ оформления"} />
      </div>
    </FilterLayout>
  );
};

export default FilterBarContract;
