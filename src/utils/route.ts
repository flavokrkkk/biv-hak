import { INavigateData } from "@models/common";

export const enum ERoutesNames {
  DEFAULT = "/home",
  LOGIN = "/login",
  REGISTER = "/register",
  HOME_CONSTRUCTOR = "/home/constructor",
  HOME_REESTR = "/home/reester",
}

export const routesData: INavigateData[] = [
  {
    id: 1,
    pathname: "/home",
    title: "Основная информация",
  },
  {
    id: 2,
    pathname: "/underwriting",
    title: "Андеррайтинг",
  },

  {
    id: 3,
    pathname: "/settings",
    title: "Настройки продукта",
  },

  {
    id: 4,
    pathname: "/document",
    title: "Документы",
  },
  {
    id: 5,
    pathname: "/document",
    title: "Кумуляция",
  },
];
