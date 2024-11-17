import {
  PlusOutlined,
  ToolOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { FC } from "react";

interface IHomeConstructorPanel {
  toggleModal: () => void;
}

const HomeConstructorPanel: FC<IHomeConstructorPanel> = ({ toggleModal }) => {
  return (
    <div className="flex gap-3 ml-auto w-fit">
      <Button
        variant="solid"
        color="primary"
        icon={<PlusOutlined />}
        onClick={toggleModal}
      >
        Добавить
      </Button>
      <Button
        variant="solid"
        color="primary"
        className="bg-[#2b2b2b]"
        icon={<UnorderedListOutlined />}
      >
        Выбрать
      </Button>
    </div>
  );
};

export default HomeConstructorPanel;
