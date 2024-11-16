import {HomeConstructorPage} from "@pages/home/homeConstructorPage";
import HomePartnersDetailPage from "@pages/home/homePartnersDetailPage";
import HomePartnersPage from "@pages/home/homePartnersPage";
import { HomeСontractsPage } from "@pages/home/homeСontractsPage";
import { LoginPage } from "@pages/loginPage";
import { RegisterPage } from "@pages/registerPage";
import { Underwriting } from "@pages/underwritting/underwriting";
import { ERoutesNames } from "@utils/route";
import { AuthLayout } from "@views/layout/authLayout";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        path: ERoutesNames.DEFAULT,
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <Navigate to={ERoutesNames.HOME_CONSTRUCTOR} replace />,
          },
          {
            path: ERoutesNames.HOME_CONSTRUCTOR,
            element: <HomeConstructorPage />,
          },
          {
            path: ERoutesNames.HOME_REESTR,
            element: <HomeСontractsPage />,
          },
          {
            path: ERoutesNames.HOME_PARTNERS,
            element: <Outlet />,
            children: [
              {
                path: "",
                element: <HomePartnersPage />,
              },
              {
                path: `${ERoutesNames.HOME_PARTNERS}/:id`,
                element: <HomePartnersDetailPage />,
              },
            ],
          },
          {
            path: ERoutesNames.HOME_CLIENTS,
            element: <div className="w-[1140px] mx-auto">Реестр клиентов(пустышка)</div>,
          },
        ],
      },
      {
        path: ERoutesNames.REGISTER,
        element: <RegisterPage />,
      },
      {
        path: ERoutesNames.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ERoutesNames.UNDERWRITING,
        element: <Underwriting/>,
      },
      {
        path: ERoutesNames.CUMULATION,
        element: <div>CUMULATION</div>,
      },
      {
        path: ERoutesNames.SETTINGS,
        element: <div>SETTINGS</div>,
      },
      {
        path: ERoutesNames.DOCUMENT,
        element: <div>DOCUMENT</div>,
      },
      {
        path: "*",
        element: <Navigate to={ERoutesNames.DEFAULT} replace />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={ERoutesNames.DEFAULT} replace />,
  },
]);
