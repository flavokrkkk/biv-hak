import { LoadingOutlined } from "@ant-design/icons";
import HomePartnersContent from "@components/homePartnersContent";
import { useActions } from "@hooks/useActions";
import { useAppSelector } from "@hooks/useAppSelector";
import { partnersSelector } from "@redux/selectors";
import HomeInfoLayout from "@views/layout/homeInfoLayout";
import { Spin } from "antd";
import { ChangeEvent, useEffect, useState } from "react";

const HomePartnersPage = () => {
  const { filterPartners } = useAppSelector(partnersSelector);
  const [searchValue, setSearchValue] = useState("");
  const { setSearchPartner } = useActions();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setSearchPartner(event.target.value);
  };

  return (
    <HomeInfoLayout value={searchValue} onChange={handleChange}>
      {!filterPartners ? (
        <Spin />
      ) : (
        <HomePartnersContent filterPartners={filterPartners} />
      )}
    </HomeInfoLayout>
  );
};

export default HomePartnersPage;
