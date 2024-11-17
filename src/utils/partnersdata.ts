import { IPartner } from "@models/common";

export const partnersData: Array<IPartner> = [
  {
    id: 123,
    username: "Яровицын Егор Викторович",
    email: "egor@gmail.com",
    insurances: [
      {
        id: 12,
        companyId: 2,
        name: "Сделка",
        description: "Крутая сделка",
        objectInsurance: "Крутая сделка",
        riskInsurance: "Крутая сделка",
        conditionsInsurance: "Крутая сделка",
        maxAmount: 11,
        amount: 11,
        expiresIn: "11",
        duration: 1111,
        agents: [
          {
            id: 11,
            username: "string",
            email: "string",
            permissions: ["CREATE_INSURANCE"],
          },
        ],
      },
    ],
  },
  {
    id: 223,
    username: "Андреев Андрей Андреевич",
    email: "egor@gmail.com",
    insurances: [
      {
        id: 12,
        companyId: 2,
        name: "Сделка",
        description: "Крутая сделка",
        objectInsurance: "Крутая сделка",
        riskInsurance: "Крутая сделка",
        conditionsInsurance: "Крутая сделка",
        maxAmount: 11,
        amount: 11,
        expiresIn: "11",
        duration: 1111,
        agents: [
          {
            id: 11,
            username: "string",
            email: "string",
            permissions: ["CREATE_INSURANCE"],
          },
        ],
      },
    ],
  },
  {
    id: 1223,
    username: "Магомедов Андрей Андреевич",
    email: "egor@gmail.com",
    insurances: [
      {
        id: 12,
        companyId: 2,
        name: "Сделка",
        description: "Крутая сделка",
        objectInsurance: "Крутая сделка",
        riskInsurance: "Крутая сделка",
        conditionsInsurance: "Крутая сделка",
        maxAmount: 11,
        amount: 11,
        expiresIn: "11",
        duration: 1111,
        agents: [
          {
            id: 11,
            username: "string",
            email: "string",
            permissions: ["CREATE_INSURANCE"],
          },
        ],
      },
    ],
  },
];
