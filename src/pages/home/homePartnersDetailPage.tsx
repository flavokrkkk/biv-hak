import CarContact from "@components/contractsContent/carContact";
import { useActions } from "@hooks/useActions";
import { useAppSelector } from "@hooks/useAppSelector";
import { partnersSelector } from "@redux/selectors";
import { ERoutesNames } from "@utils/route";
import { Button, Checkbox, Switch, Tabs, TabsProps } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const HomePartnersDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setSelectPartner } = useActions();
  const { selectPartner } = useAppSelector(partnersSelector);

  const tabData: TabsProps["items"] = [
    {
      key: "1",
      label: "Автомобиль",
      children: <CarContact />,
    },
    {
      key: "2",
      label: "Документы",
      children: "Информация об документе",
    },
    {
      key: "4",
      label: "Стоимость",
      children: "Информация о стоимость",
    },
    {
      key: "5",
      label: "Оплата",
      children: "Информация об оплата",
    },
  ];

  useEffect(() => {
    if (id) {
      setSelectPartner(Number(id));
    }
  }, [id, selectPartner]);

  return (
    <div className="flex flex-col space-y-5 px-4 w-[1140px] mx-auto bg-white pt-4">
      <div className="flex justify-between">
        <div className="flex flex-col space-y-1">
          <h1 className="font-medium text-xl">{selectPartner?.name}</h1>
          <div className="flex space-x-8">
            <span>ID:{selectPartner?.id}</span>
            <span>{selectPartner?.city}</span>
            <span>{selectPartner?.statusDeal}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button>Сатистика</Button>
          <Button>Редактировать</Button>
        </div>
      </div>
      <div className=" max-w-[1140px] flex flex-col space-y-4 p-3 rounded-lg">
        <h1 className="font-medium text-xl">Дополнительные функции</h1>
        <div className="flex flex-col space-y-3 ml-2">
          <div className="flex justify-between">
            <span>Подсказки по тарифам</span>
            <Switch />
          </div>
          <div className="flex justify-between">
            <span>Доступ к определенным справочникам</span>
            <Switch />
          </div>
          <div className="flex justify-between">
            <span>Расчеты рисков</span>
            <Switch />
          </div>
          <div className="flex justify-between">
            <span>Редактирование информации о клиентах</span>
            <Switch />
          </div>
          <div className="flex justify-between">
            <span>Быстрая подача заявок для повторных клиентов</span>
            <Switch />
          </div>
          <div className="flex justify-between">
            <span>Сравнение с коллегами по ключевым показателям</span>
            <Switch />
          </div>
        </div>
      </div>
      <div className="bg-white max-w-[700px] flex flex-col space-y-4 p-3 rounded-lg">
        <Tabs
          defaultActiveKey="1"
          className=""
          items={tabData}
          onChange={() => console.log("")}
        />
      </div>
    </div>
  );
};

export default HomePartnersDetailPage;
