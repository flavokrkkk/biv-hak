import { AsideContent } from "@components/asideContent";
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

  return (
    <div className="mx-auto flex flex-col max-w-[1440px] space-y-2 h-screen overflow-hidden ">
      <header className="p-4 flex justify-between">
        <span className="font-bold">XddTeam</span>
        <Button variant="solid" color="primary">
          Выйти
        </Button>
      </header>
      <div className=" w-full flex space-x-2">
        <aside className="flex  h-screen w-[228px]  flex-col">
          <AsideContent routesData={routesData} />
        </aside>
        <main className=" w-full">
          <div className="flex justify-center">
            <Tabs defaultActiveKey="1" items={tabData} onChange={onChange} />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};
