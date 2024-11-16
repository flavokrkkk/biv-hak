import { AsideContent } from "@components/asideContent";
import { deleteTokens } from "@helpers/tokenHelper";
import { routesData } from "@utils/route";
import { tabData } from "@utils/tabdata";
import { Button, Tabs, TabsProps } from "antd";
import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

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

  return (
    <div className="mx-auto flex flex-col w-full px-[210px] space-y-2 h-screen overflow-x-hidden">
      <header className="p-4 flex justify-between">
        <span className="font-bold">XddTeam :)</span>
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
            style={{ backgroundImage: "url(/panel.png)" }}
            className="xl:w-[1140px] lg:w-[800px] ml-10 h-[171px] "
          ></div>
          <div className="flex justify-center mr-auto w-fit ml-10 mt-4" >
            <Tabs
              defaultActiveKey="1"
              items={tabData}
              onChange={onChange}
              className="ml-2 "
            />
          </div>
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
};
