import Search from "antd/es/transfer/search";
import { ChangeEvent, FC } from "react";

interface IHomeInfoLayout {
  children: React.ReactNode;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const HomeInfoLayout: FC<IHomeInfoLayout> = ({ children, onChange, value }) => {
  return (
    <div className="mt-1">
      <div className="w-full flex flex-col space-y-3 ">
        <Search placeholder="Поиск..." value={value} onChange={onChange} />
        {children}
      </div>
    </div>
  );
};

export default HomeInfoLayout;
