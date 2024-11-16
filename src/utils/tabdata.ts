import { TabsProps } from "antd";
import { ERoutesNames } from "./route";

export const tabData: TabsProps["items"] = [
  {
    key: "1",
    label: "Конструктор продуктов",
    text: ERoutesNames.HOME_CONSTRUCTOR,
  },
  {
    key: "2",
    label: "Реестр договоров",
    text: ERoutesNames.HOME_REESTR,
  },
  {
    key: "3",
    label: "Объект страхования",
  },
  {
    key: "4",
    label: "Реестр партнеров",
  },
  {
    key: "5",
    label: "Реестр клиентов",
  },
];
