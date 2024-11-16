import { LoginPage } from "@pages/loginPage";
import { ERoutesNames } from "@utils/route";
import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cookies from "js-cookie";
import { Layout } from "./layout";

interface IAuthLayout {
  children: React.ReactNode;
}

export const AuthLayout: FC<IAuthLayout> = ({ children }) => {
  const navigate = useNavigate();
  const isAuth = !!cookies.get("access_token");
  const { pathname } = useLocation();

  const publicRoutes = [ERoutesNames.LOGIN, ERoutesNames.REGISTER];

  useEffect(() => {
    if (!isAuth && !publicRoutes.includes(pathname as ERoutesNames)) {
      navigate(ERoutesNames.LOGIN, { replace: true });
    } else if (isAuth && publicRoutes.includes(pathname as ERoutesNames)) {
      navigate(ERoutesNames.DEFAULT, { replace: true });
    }
  }, [isAuth, pathname]);

  return (
    <div>
      {isAuth ? (
        <Layout>{children}</Layout>
      ) : publicRoutes.includes(pathname as ERoutesNames) ? (
        children
      ) : (
        <LoginPage />
      )}
    </div>
  );
};
