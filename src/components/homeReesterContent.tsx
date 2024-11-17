import { PlusOutlined } from "@ant-design/icons";
import { useActions } from "@hooks/useActions";
import { IInsuranceResponseData, IPartner } from "@models/common";
import { EPermissions } from "@utils/persmission";
import { Button, message } from "antd";
import { FC } from "react";

interface IHomeReesterContent {
  filterPartners: IPartner[];
  selectInsurance: IInsuranceResponseData;
}

const HomeReesterContent: FC<IHomeReesterContent> = ({
  filterPartners,
  selectInsurance,
}) => {
  const { setAsignAgent } = useActions();

  const handleAddAsignAgent = (param: IPartner) => {
    setAsignAgent({
      ...selectInsurance,
      agents: [
        {
          agentId: param.id,
          permissions: [],
        },
      ],
    });
    message.success("Усешное добавление партнера в сделку!");
  };

  return (
    <div>
      <div className="flex flex-col space-y-2">
        {filterPartners.map((partner) => (
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
                  onClick={() => handleAddAsignAgent(partner)}
                ></Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeReesterContent;
