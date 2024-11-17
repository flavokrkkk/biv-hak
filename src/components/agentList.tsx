import { PlusOutlined } from "@ant-design/icons";
import { IPartner } from "@models/common";
import { Button } from "antd";
import { FC } from "react";

interface IAgentList {
  partner: IPartner;
  setAgent: (partner: IPartner) => void;
}

const AgentList: FC<IAgentList> = ({ partner, setAgent }) => {
  const handleAddAsignAgent = () => {
    setAgent(partner);
  };

  return (
    <div
      className="border cursor-pointer flex w-full items-center justify-between rounded-lg p-6  bg-white ease-in-out"
      key={partner.id}
    >
      <div className="flex justify-between  w-full">
        <div>
          <h1 className="font-medium text-xl">{partner.username}</h1>
          <span>ID:{partner.id}</span>
        </div>

        <div className="flex justify-center items-center">
          <Button
            icon={<PlusOutlined />}
            onClick={handleAddAsignAgent}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default AgentList;