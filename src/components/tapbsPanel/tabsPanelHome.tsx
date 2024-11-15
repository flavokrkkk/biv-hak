import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";
interface ITabsPanelHome {
}

export const TabsPanelHome: FC<ITabsPanelHome> = ({ }) => {
  const navigate = useNavigate();
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Конструктор продуктов",
      children: "",
    },
    {
      key: "2",
      label: "Реестр договоров",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Реестр партнеров",
      children: "Content of Tab Pane 3",
    },
    {
      key: "3",
      label: "Реестр клиентов",
      children: "Content of Tab Pane 3",
    },
  ];
  const onChange = () => {};
  return (
    <div className="flex ml-[90px] gap-[60px] cursor-pointer">
      <ConfigProvider theme={{
        components:{
          Tabs:{
            itemActiveColor:''
          }
        }
      }}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} /></ConfigProvider>
      {/* <div
        className={`${
          active === "constructor" ? "bg-[#3481ff] text-white" : "text-black"
        } px-2 py-1 rounded-full `}
        onClick={() => navigate("home/constructor")}
      >
        Конструктор продуктов
      </div>
      <div
        className={`${
          active === "reester" ? "bg-[#3481ff] text-white" : "text-black"
        } px-2 py-1 rounded-full `}
        onClick={() => navigate("home/reester")}
      >
        Реестр договоров
      </div>
      <div
        className={`${
          active === "partners" ? "bg-[#3481ff] text-white" : "text-black"
        } px-2 py-1 rounded-full `}
        onClick={() => navigate("home/partners")}
      >
        Реестр партнеров
      </div>
      <div
        className={`${
          active === "clients" ? "bg-[#3481ff] text-white" : "text-black"
        } px-2 py-1 rounded-full `}
        onClick={() => navigate("home/clients")}
      >
        Реестр клиентов
      </div> */}
    </div>
  );
};
