import {
  EditOutlined,
  InfoCircleOutlined,
  InfoOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { partnerMethods } from "@api/partnerResponse";
import { IPartner } from "@models/common";
import { Button, Input, message, Modal } from "antd";
import { FC, FormEvent, useCallback, useState } from "react";
import PartnersList from "./partnersList";

interface IHomePartnersContent {
  filterPartners: IPartner[];
}

const HomePartnersContent: FC<IHomePartnersContent> = ({ filterPartners }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [partnerLogin, setPartnerLogin] = useState<string>("");

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleChangePartnerId = (newPartnerLogin: string) => {
    setPartnerLogin(newPartnerLogin);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { status } = await partnerMethods.linkToCompany(
        "/api/company/assignagent",
        { agentName: partnerLogin }
      );
      if (status !== 200) throw new Error("Invalid status code!");
      toggle();

      message.success("Партнер успешно добавлен!");
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <div className="px-4 w-[1140px] mx-auto">
      <Modal
        open={isOpen}
        onClose={toggle}
        onOk={toggle}
        onCancel={toggle}
        okText="Добавить"
        footer={null}
      >
        <div className="text-xl font-semibold">Назначить партнера компании</div>
        <div className="flex space-x-3 my-2">
          <InfoCircleOutlined />
          <div>
            Вы собираетесь назначить партнера компании, которым в последующем
            сможет торговать вашими продуктами.
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Логин партнера (имя)</label>

          <Input
            required
            value={partnerLogin}
            onChange={(e) => handleChangePartnerId(e.target.value)}
          />
          <div className="ml-auto w-fit flex space-x-2 mt-3">
            <Button className=" mt-2 ml-auto" onClick={toggle}>
              Отменить
            </Button>
            <Button
              htmlType="submit"
              className="bg-[#1677ff] text-white mt-2 ml-auto"
            >
              Добавить
            </Button>
          </div>
        </form>
      </Modal>
      <div className="flex justify-between font-medium mb-4 px-6 w-full ">
        <div className="flex space-x-40">
          <span>Информация о работнике</span>
        </div>
        <PlusOutlined className="ml-auto cursor-pointer" onClick={toggle} />
      </div>
      <div className="flex flex-col space-y-2">
        {filterPartners.map((partner) => (
          <PartnersList key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default HomePartnersContent;
