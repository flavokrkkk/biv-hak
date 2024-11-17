import { EditOutlined } from "@ant-design/icons";
import { partnerMethods } from "@api/partnerResponse";
import { useActions } from "@hooks/useActions";
import { useAppSelector } from "@hooks/useAppSelector";
import { IInsurance, IInsuranceResponseData, IPartner } from "@models/common";
import { insureSelector, partnersSelector } from "@redux/selectors";
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
import { useNavigate, useParams } from "react-router-dom";

const HomePartnersDetailPage = () => {
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { setSelectInsurances, getAgentById } = useActions();
  const { selectInsurance } = useAppSelector(insureSelector);

  const { selectPartner } = useAppSelector(partnersSelector);
  const [permissionList, setPermissionList] = useState<any[]>();

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
  }, [selectInsurance, selectPartner, setIsEdit]);

  useEffect(() => {
    if (id) {
      getAgentById(Number(id));
    }
  }, [id]);

  if (isEdit) {
    return (
      <div className="flex flex-col space-y-5 px-4 w-[1140px] mx-auto ">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-1">
            <h1 className="font-medium text-xl">{selectInsurance?.name}</h1>
            <div className="flex space-x-8">
              <span>№ договора:{selectInsurance?.id}</span>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col space-y-4 p-3 rounded-lg">
          <h1 className="font-medium text-xl">
            Редактирование прав партнера {selectPartner?.username}
          </h1>
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between">
              <span>Видеть параметры</span>
              <Switch />
            </div>

            <div className="flex justify-between">
              <span>Редактирование информации страховки</span>
              <Switch />
            </div>
            <div className="flex justify-between">
              <span>Созздание параматеров страховки</span>
              <Switch />
            </div>

            <div className="flex justify-between">
              <span>Удаление страховки </span>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-[1140px] mx-auto  bg-white rounded-lg py-3">
      <Table
        dataSource={selectPartner?.insurances}
        columns={dataColumns}
        size="large"
      />

      <div className="flex justify-center w-full">
        {selectPartner?.insurances.length ? <Button>Сохранить</Button> : null}
      </div>
    </div>
  );
};

export default HomePartnersDetailPage;
//
