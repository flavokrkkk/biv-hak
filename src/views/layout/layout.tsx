import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};
