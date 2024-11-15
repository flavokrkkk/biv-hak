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
    <div className="flex h-screen flex-grow py-2 space-y-3 flex-col  w-[200px] ">
      <div className="flex text-[14px]  justify-center flex-col h-[262px] p-2 space-y-3 rounded-3xl  bg-gray-200 ">
        {routesData.map((route) => (
          <NavLink
            key={route.id}
            to={route.pathname}
            className={({ isActive }) =>
              isActive ? "bg-gray-400 p-1 px-2 rounded-3xl text-white" : "p-2"
            }
          >
            {route.title}
          </NavLink>
        ))}
      </div>
      {downPanel[(locate.pathname ?? "") as EDownPanelKeys]}
    </div>
  );
};
