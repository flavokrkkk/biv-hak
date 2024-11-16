import HomeInfoLayout from "@views/layout/homeInfoLayout";
import { ChangeEvent, FC, useState } from "react";

interface IHomeContractsPage {}

export const HomeContractsPage: FC<IHomeContractsPage> = ({}) => {
  const [searchValue, setSearchValue] = useState("");
  const data   = [
    {
      
    }
  ]
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <div>
      <HomeInfoLayout value={searchValue} onChange={handleChange}>
        <div>

        </div>
      </HomeInfoLayout>
    </div>
  );
};
