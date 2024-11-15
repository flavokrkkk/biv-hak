import { INavigateData } from "@models/common";
import { downPanel, EDownPanelKeys } from "@utils/downpanel";
import { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface IAsideContent {
  routesData: Array<INavigateData>;
}
export const AsideContent: FC<IAsideContent> = ({ routesData }) => {
  const locate = useLocation();

  return (
    <div className="flex h-screen flex-grow py-2 space-y-3 flex-col w-[200px]">
      <div className="flex text-[14px] justify-center flex-col p-2 space-y-3 rounded-3xl bg-gray-200 py-4">
        {routesData.map((route) => (
          <NavLink
            key={route.id}
            to={route.pathname}
            className={({ isActive }) => 
              `px-2 py-2 rounded-3xl ${isActive ? "bg-[#b2b2b2] text-black" : "text-gray-700"}`
            }
          >
            <div className=" mx-[6px]">{route.title}</div>
          </NavLink>
        ))}
      </div>
      {downPanel[(locate.pathname ?? "") as EDownPanelKeys]}
    </div>
  );
};
