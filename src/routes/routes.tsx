import { LoginPage } from "@pages/loginPage";
import { RegisterPage } from "@pages/registerPage";
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
            element: <div>homeconstructor</div>,
          },
          {
            path: ERoutesNames.HOME_REESTER_CONTRACTS,
            element: <div>Реестр договоров договоров</div>,
          },
          {
            path: ERoutesNames.HOME_REESTER_PARTNERS,
            element: <div>Реестр договоров партнеров</div>,
          },
          {
            path: ERoutesNames.HOME_REESTER_CLIENTS,
            element: <div>Реестр договоров клиентов</div>,
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
        path:ERoutesNames.UNDERWRITING,
        element:<div>UNDERWRITING</div>
      },
      {
        path:ERoutesNames.SETTINGS,
        element:<div>SETTINGS</div>
      },
      {
        path:ERoutesNames.DOCUMENT,
        element:<div>DOCUMENT</div>
      },
      {
        path:ERoutesNames.CUMULATION,
        element:<div>CUMULATION</div>
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
