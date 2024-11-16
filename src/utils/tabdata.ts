import { ERoutesNames } from "./route";
interface CustomTabItem {
  key: string;
  label: React.ReactNode;
  text: string;
}

export const tabData: CustomTabItem[] = [
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
    label: "Реестр партнеров",
    text: ERoutesNames.HOME_PARTNERS,
  },
  {
    key: "4",
    label: "Реестр клиентов",
    text: ERoutesNames.HOME_CLIENTS,
  },
];
