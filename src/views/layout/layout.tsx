import { AsideContent } from "@components/asideContent";
import { routesData } from "@utils/route";
import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-auto flex flex-col max-w-[1440px] space-y-2 h-screen overflow-hidden ">
      <header className="p-4">header</header>
      <div className=" w-full flex space-x-2">
        <aside className="flex  h-screen w-[228px]  flex-col">
          <AsideContent routesData={routesData} />
        </aside>
        <main className=" w-full ">{children}</main>
      </div>
    </div>
  );
};
