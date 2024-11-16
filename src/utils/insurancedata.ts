import { IInsurance } from "@models/common";

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
