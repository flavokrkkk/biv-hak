import { FC } from "react";

interface IEntranceLayout {
  children: React.ReactNode;
}

export const EntranceLayout: FC<IEntranceLayout> = ({ children }) => {
  return (
    <div className="border h-screen flex justify-center flex-col items-center">
      <h1 className="absolute top-5 font-bold">xddTeam</h1>
      <div className="">{children}</div>
    </div>
  );
};
