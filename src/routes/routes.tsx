import { LoginPage } from "@pages/loginPage";
import { RegisterPage } from "@pages/registerPage";
import { ERoutesNames } from "@utils/route";
import { AuthLayout } from "@views/layout/authLayout";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        path: ERoutesNames.DEFAULT,
        element: <div>home</div>,
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
]);
