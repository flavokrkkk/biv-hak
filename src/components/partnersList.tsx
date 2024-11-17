import { EditOutlined } from "@ant-design/icons";
import { IPartner } from "@models/common";
import { ERoutesNames } from "@utils/route";
import { Button } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

interface IPartnersList {
  partner: IPartner;
}

const PartnersList: FC<IPartnersList> = ({ partner }) => {
  return (
    <div
      className="border cursor-pointer rounded-lg p-6 pb-10 bg-white ease-in-out"
      key={partner.id}
    >
      <div>
        <div className="flex justify-between">
          <h1 className="font-medium text-xl">{partner.username}</h1>
          <Button icon={<EditOutlined />}>
            <Link to={`${ERoutesNames.HOME_PARTNERS}/${partner.id}`}>
              Редактировать
            </Link>
          </Button>
        </div>
        <section className="flex space-x-[315px] mt-2">
          <div className="flex flex-col">
            <span>ID:{partner.id}</span>
          </div>
          <div>
            <Button variant="dashed" className="bg-green-300">
              Активен
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartnersList;
