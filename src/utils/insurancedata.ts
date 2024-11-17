import { IInsurance } from "@models/common";
import { DefaultOptionType } from "antd/es/select";

export const insurancedata: IInsurance[] = [
  {
    id: 1,
    number: 32123,
    name: "E.В.Яровицын",
    expiresIn: "23.01.2024",
    objectInsurance: "Здоровье",
    conditionsInsurance: "Долгосрочный",
    amount: "Годовая",
  },
  {
    id: 2,
    number: 12421,
    name: "A.A.Aндреев",
    expiresIn: "23.01.2024",
    objectInsurance: "Животные",
    conditionsInsurance: "Краткосрочный",
    amount: "Однократная",
  },
  {
    id: 3,
    number: 62131,
    name: "М.М.Магомедов",
    expiresIn: "23.01.2024",
    objectInsurance: "Путешествиe",
    conditionsInsurance: "Годовой",
    amount: "Долгосрочная",
  },
  {
    id: 4,
    number: 94531,
    name: "А.С.Пушкин",
    expiresIn: "23.01.2024",
    objectInsurance: "Жильё",
    conditionsInsurance: "Однократный",
    amount: "Краткосрочная",
  },
];

export const objectInsurance: Array<DefaultOptionType> = [
  { label: "Здоровье", value: "Здоровье" },
  { label: "Путешествиe", value: "Путешествиe" },
  { label: "Жильё", value: "Жильё" },
  { label: "Животные", value: "Животные" },
];

export const risks = [
  { label: "Заболевания и травмы", value: "Заболевания и травмы" },
  { label: "Несчастные случаи", value: "Несчастные случаи" },
  {
    label: "Экстренная медицинская помощь",
    value: "Экстренная медицинская помощь",
  },
  { label: "Реабилитация", value: "Реабилитация" },

  { label: "Медицинские риски", value: "Медицинские риски" },
  {
    label: "Отмена или прерывание поездки",
    value: "Отмена или прерывание поездки",
  },
  { label: "Потеря имущества", value: "Потеря имущества" },
  { label: "Неожиданные ситуации", value: "Неожиданные ситуации" },

  { label: "Пожары", value: "Пожары" },
  { label: "Залив", value: "Залив" },
  { label: "Кража и вандализм", value: "Кража и вандализм" },
  { label: "Природные явления", value: "Природные явления" },

  { label: "Заболевания", value: "Заболевания" },
  { label: "Несчастные случаи", value: "Несчастные случаи" },
  {
    label: "Гражданская ответственность",
    value: "Гражданская ответственность",
  },
  { label: "Утрата или смерть", value: "Утрата или смерть" },
];
