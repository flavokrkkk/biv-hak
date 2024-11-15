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
        element: (
          <div>
            <Outlet />
          </div>
        ),
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
            path: ERoutesNames.HOME_REESTR,
            element: <div>Реестр договоров</div>,
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
