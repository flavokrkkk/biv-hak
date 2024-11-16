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
    <div className="flex h-screen flex-grow py-2 space-y-3 flex-col  w-[210px] ">
      <div className="flex text-[14px]  justify-center flex-col h-[100px] p-2 space-y-3 rounded-lg bg-white ">
        {routesData.map((route) => (
          <NavLink
            key={route.id}
            to={route.pathname}
            className={({ isActive }) =>
              isActive
                ? "bg-[#CDE2FF] p-[6px] px-[10px] rounded-lg flex items-center"
                : "p-2"
            }
          >
            <div className="flex space-x-2">
              <span>{route.icon}</span>
              <span>{route.title}</span>
            </div>
          </NavLink>
        ))}
      </div>
      {downPanel[(locate.pathname ?? "") as EDownPanelKeys]}
    </div>
  );
};
