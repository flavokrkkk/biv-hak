import { EditOutlined } from "@ant-design/icons";
import { IPartner } from "@models/common";
import { ERoutesNames } from "@utils/route";
import { Button } from "antd";
import React, { FC } from "react";
import { Link } from "react-router-dom";

interface IHomePartnersContent {
  filterPartners: IPartner[];
}

const HomePartnersContent: FC<IHomePartnersContent> = ({ filterPartners }) => {
  return (
    <main className="px-4">
      <div className="flex space-x-14 font-medium mb-4 px-6 ">
        <span>Информация о работнике</span>
        <span>Полис</span>
        <span>Статус</span>
      </div>
      <div className="flex flex-col space-y-2">
        {filterPartners.map((partner) => (
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
  );
};

export default HomePartnersContent;
