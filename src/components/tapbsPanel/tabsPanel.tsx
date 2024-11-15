import { FC } from "react";
import { useLocation } from "react-router-dom";
import { TabsPanelHome } from "./tabsPanelHome";

export const TabsPanel: FC = ({}) => {
  const { pathname } = useLocation();

  let url = pathname.substring(1);

  const indexOfSlash = url.indexOf("/");

  const module = indexOfSlash === -1 ? url : url.substring(0, indexOfSlash);
  const activeTab = indexOfSlash === -1 ? "" : url.substring(indexOfSlash + 1);

  return (
    <div>
      {module === "home" && <TabsPanelHome />}
      {module === "underwriting" && <TabsPanelHome />}
      {module === "settings" && <TabsPanelHome />}
      {module === "document" && <TabsPanelHome />}
      {module === "cumulation" && <TabsPanelHome />}
    </div>
  );
};
