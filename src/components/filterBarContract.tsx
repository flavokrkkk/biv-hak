import { useState, useMemo, useCallback } from "react";
import { Select, Button } from "antd";
import { DefaultOptionType } from "antd/es/select";
import FilterLayout from "@views/layout/filterLayout";
import { useActions } from "@hooks/useActions";
import { useAppSelector } from "@hooks/useAppSelector";
import { insureSelector } from "@redux/selectors";

const FilterComponent = () => {
  const { setFilterInsurances, setCleanFilter, setFilterParam } = useActions();
  const { filterParam } = useAppSelector(insureSelector);

  const [filters, setFilters] = useState({
    objectInsurance: "Объект страхования",
    conditionsInsurance: "Срок",
    amount: "Форма страхования",
    coverageType: "Тип покрытия",
    applicationMethod: "Способ оформления",
  });

  const handleCleanFilter = () => {
    setFilters({
      objectInsurance: "Объект страхования",
      conditionsInsurance: "Срок",
      amount: "Форма страхования",
      coverageType: "Тип покрытия",
      applicationMethod: "Способ оформления",
    });
    setCleanFilter();
  };

  const handleFilterChange = useCallback((key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    setFilterParam({ key: key, value: value });
    setFilterInsurances();
  }, []);
  console.log(filterParam);
  const { objectInsuranceOptions, termOptions, formInsurance } = useMemo(() => {
    const objectInsuranceOptions = [
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

    return { objectInsuranceOptions, termOptions, formInsurance };
  }, []);

  return (
    <FilterLayout>
      <section className="h-full flex flex-col justify-between">
        <div className="flex flex-col space-y-2">
          <Select
            options={objectInsuranceOptions}
            placeholder={"Объект страхования"}
            value={filters.objectInsurance}
            onChange={(value) => handleFilterChange("objectInsurance", value)}
          />
          <Select
            placeholder={"Срок"}
            defaultValue={"Срок"}
            options={termOptions}
            value={filters.conditionsInsurance}
            onChange={(value) =>
              handleFilterChange("conditionsInsurance", value)
            }
          />
          <Select
            placeholder={"Форма страхования"}
            options={formInsurance}
            value={filters.amount}
            onChange={(value) => handleFilterChange("amount", value)}
          />
          <Select
            placeholder={"Тип покрытия"}
            value={filters.coverageType}
            onChange={(value) => handleFilterChange("coverageType", value)}
          />
          <Select
            placeholder={"Способ оформления"}
            value={filters.applicationMethod}
            onChange={(value) => handleFilterChange("applicationMethod", value)}
          />
        </div>
        <Button onClick={handleCleanFilter}>Очистить</Button>
      </section>
    </FilterLayout>
  );
};

export default FilterComponent;
