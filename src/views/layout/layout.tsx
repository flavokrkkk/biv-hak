import { AsideContent } from "@components/asideContent";
import { deleteTokens } from "@helpers/tokenHelper";
import { useActions } from "@hooks/useActions";
import { routesData } from "@utils/route";
import { tabData } from "@utils/tabdata";
import { Button, Tabs } from "antd";
import { FC, PropsWithChildren, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { getAllPartners, getRefreshInfo } = useActions();

  const onChange = (key: string) => {
    const findIndex = tabData?.findIndex((el) => el.key === key);
    if (findIndex !== undefined && findIndex !== -1 && tabData) {
      navigate(tabData[findIndex].text ?? "");
    }
  };

  const handleLogout = () => {
    deleteTokens();
    navigate(0);
  };

  useEffect(() => {
    getAllPartners();
    getRefreshInfo();
  }, []);

  return (
    <div className="mx-auto flex flex-col w-full px-[210px] space-y-2 h-screen overflow-x-hidden">
      <header className="p-4 flex justify-between">
        <span className="font-bold">XddTeam-Strife :)</span>
        <Button variant="solid" color="primary" onClick={handleLogout}>
          Выйти
        </Button>
      </header>
      <div className=" w-full flex space-x-2">
        <aside className="flex  h-screen w-[228px]  flex-col">
          <AsideContent routesData={routesData} />
        </aside>
        <main className=" w-full">
          <div
            style={{
              backgroundImage: "url(/panel.png)",
              backgroundSize: "cover",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
            }}
            className=" h-[171px] mx-5"
          ></div>
          <div className="flex justify-center mr-auto w-fit ml-10 mt-4">
            <Tabs
              defaultActiveKey={
                tabData.find((tab) => tab.text === pathname)?.key
              }
              items={tabData}
              onChange={onChange}
              className="ml-2 "
            />
          </div>
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
};
