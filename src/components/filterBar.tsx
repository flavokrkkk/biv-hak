const FilterBar = () => {
  return (
    <div className="flex text-[14px] flex-col h-[342px] shadow-md p-2 space-y-3 rounded-lg  bg-white">
      <div className="flex justify-between">
        <span className="font-bold">Фильтры</span>
        <span className="cursor-pointer">очистить</span>
      </div>
    </div>
  );
};

export default FilterBar;
