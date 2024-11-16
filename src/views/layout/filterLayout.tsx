import React, { FC } from "react";

interface IFilterLayout {
  children: React.ReactNode;
}

const FilterLayout: FC<IFilterLayout> = ({ children }) => {
  return (
    <div className="flex text-[14px] flex-col h-[342px] shadow-md p-3 space-y-3 rounded-lg  bg-white">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between">
          <span className="font-bold">Фильтры</span>
          <span className="cursor-pointer">очистить</span>
        </div>

        {children}
      </div>
    </div>
  );
};

export default FilterLayout;
