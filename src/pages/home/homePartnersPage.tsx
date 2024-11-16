import { EditOutlined } from "@ant-design/icons";
import { useAppSelector } from "@hooks/useAppSelector";
import { partnersSelector } from "@redux/selectors";
import { ERoutesNames } from "@utils/route";
import HomeInfoLayout from "@views/layout/homeInfoLayout";
import { Button } from "antd";
import Search from "antd/es/input/Search";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const HomePartnersPage = () => {
  const { partners } = useAppSelector(partnersSelector);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <HomeInfoLayout value={searchValue} onChange={handleChange}>
      <main className="px-4">
        <div className="flex space-x-14 font-medium mb-4 px-6 ">
          <span>Информация о работнике</span>
          <span>Полис</span>
          <span>Статус</span>
        </div>
        <div className="flex flex-col space-y-2">
          {partners.map((partner) => (
            <div
              className="border cursor-pointer p-6 pb-10 bg-white ease-in-out"
              key={partner.id}
            >
              <div>
                <div className="flex justify-between">
                  <h1 className="font-medium text-xl">{partner.name}</h1>
                  <Button icon={<EditOutlined />}>
                    <Link to={`${ERoutesNames.HOME_PARTNERS}/${partner.id}`}>
                      Редактировать
                    </Link>
                  </Button>
                </div>
                <section className="flex flex-col space-y-6">
                  <div className="flex flex-col">
                    <span>{partner.city}</span>
                    <span>ID:{partner.id}</span>
                  </div>
                  <div className="flex space-x-20">
                    <span>{partner.standing}</span>
                    <span>{partner.polis}</span>
                    <Button>{partner.statusDeal}</Button>
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
      </main>
    </HomeInfoLayout>
  );
};

export default HomePartnersPage;
