import { EditOutlined } from "@ant-design/icons";
import { partnerMethods } from "@api/partnerResponse";
import CarContact from "@components/contractsContent/carContact";
import { useActions } from "@hooks/useActions";
import { useAppSelector } from "@hooks/useAppSelector";
import { IInsurance, IInsuranceResponseData } from "@models/common";
import { insureSelector, partnersSelector } from "@redux/selectors";
import { insurancedata } from "@utils/insurancedata";
import { ERoutesNames } from "@utils/route";
import {
  Button,
  Checkbox,
  message,
  Space,
  Switch,
  Table,
  Tabs,
  TabsProps,
} from "antd";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const HomePartnersDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setSelectPartner } = useActions();
  const [listData, setListData] = useState<any | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { setSelectInsurances } = useActions();
  const {selectInsurance} = useAppSelector(insureSelector)

  const dataColumns = useMemo(() => {
    return [
      {
        title: "№ договора",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "ФИО",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Дата",
        dataIndex: "expiresIn",
        key: "expiresIn",
      },
      {
        title: "Объект",
        dataIndex: "objectInsurance",
        key: "objectInsurance",
      },
      {
        title: "Срок",
        dataIndex: "conditionsInsurance",
        key: "conditionsInsurance",
      },
      {
        title: "Форма",
        dataIndex: "amount",
        key: "amount",
      },
      {
        title: "Действия",
        key: "action",
        render: (_: any, record: IInsuranceResponseData) => (
          <Space size="middle" className="flex justify-center">
            <Button
              onClick={() => {
                setIsEdit(true);
                setSelectInsurances(record.id);
              }}
              icon={<EditOutlined />}
              type="primary"
            ></Button>
          </Space>
        ),
      },
    ];
  }, []);

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
    const fetchData = async () => {
      if (id) {
        try {
          setSelectPartner(Number(id));
          const { data, status } = await partnerMethods.getAgent(
            "/api/company/getagent",
            +id
          );
          if (status === 200) {
            // setListData(data);
            setListData(insurancedata);
          } else {
            message.error("Ошибка получения данных партнера!");
          }
        } catch (error) {
          message.error("Произошла ошибка при запросе!");
        }
      }
    };

    fetchData();
  }, [id]);

  if (isEdit ) {
    return (
      <div className="flex flex-col space-y-5 px-4 w-[1140px] mx-auto ">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-1">
            {/* <h1 className="font-medium text-xl">{selectPartner?.username}</h1>
          <div className="flex space-x-8">
            <span>ID:{selectPartner?.id}</span>
          </div> */}
            <h1 className="font-medium text-xl">{selectInsurance?.name}</h1>
            <div className="flex space-x-8">
              <span>№ договора:{selectInsurance?.id}</span>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col space-y-4 p-3 rounded-lg">
          <h1 className="font-medium text-xl">Дополнительные функции</h1>
          <div className="flex flex-col space-y-3">
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
        {/* <div className="bg-white flex flex-col space-y-4 p-3 rounded-lg">
        <Tabs
          defaultActiveKey="1"
          items={tabData}
          onChange={() => console.log("")}
        />
      </div> */}
      </div>
    );
  }
  return (
    <div className="w-[1140px] mx-auto  bg-white rounded-lg">
      <Table dataSource={listData} columns={dataColumns} size="large" />

      {/* {listData?.insurances === undefined && <div>загрузка...</div>}
      {listData?.insurances.length === 0 && <div >У агента нет продуктов</div>} */}
      {listData === undefined && <div>загрузка...</div>}
      {listData?.length === 0 && <div>У агента нет продуктов</div>}
    </div>
  );
};

export default HomePartnersDetailPage;
