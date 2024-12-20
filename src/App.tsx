import { useActions } from "@hooks/useActions";
import { routes } from "@routes/routes";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

export const App = () => {
  const { getRefreshInfo } = useActions();

  return <RouterProvider router={routes} />;
};
