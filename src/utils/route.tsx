import {
  ContainerOutlined,
  CopyOutlined,
  DeploymentUnitOutlined,
  DiffOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { INavigateData } from "@models/common";

export const enum ERoutesNames {
  DEFAULT = "/home",
  LOGIN = "/login",
  REGISTER = "/register",
  HOME_CONSTRUCTOR = "/home/constructor",
  HOME_REESTR = "/home/reester",
  HOME_PARTNERS = "/home/partners",
  HOME_CLIENTS = "/home/clients",
  UNDERWRITING ='/underwriting',
  SETTINGS ='/settings',
  CUMULATION ='/cumulation',
  DOCUMENT ='/document',
}

export const routesData: INavigateData[] = [
  {
    id: 1,
    pathname: "/home",
    title: "Основная информация",
    icon: <ContainerOutlined />,
  },
  {
    id: 2,
    pathname: "/underwriting",
    title: "Андеррайтинг",
    icon: <DiffOutlined />,
  },

  {
    id: 3,
    pathname: "/settings",
    title: "Настройки продукта",
    icon: <SettingOutlined />,
  },

  {
    id: 4,
    pathname: "/cumulation",
    title: "Кумуляция",
    icon: <DeploymentUnitOutlined />,
  },
  {
    id: 5,
    pathname: "/document",
    title: "Документы",
    icon: <CopyOutlined />,
  },
];
