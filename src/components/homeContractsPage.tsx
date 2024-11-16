import {
  EditOutlined,
  PlusOutlined,
  ToolOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { useActions } from "@hooks/useActions";
import { useAppSelector } from "@hooks/useAppSelector";
import { IInsurance } from "@models/common";
import { insureSelector } from "@redux/selectors";
import HomeInfoLayout from "@views/layout/homeInfoLayout";
import { Button, Space, Table } from "antd";
import { ChangeEvent, FC, useMemo, useState } from "react";

interface IHomeContractsPage {}

export const HomeContractsPage: FC<IHomeContractsPage> = ({}) => {
  const [searchValue, setSearchValue] = useState("");
  const { insurancesFilter } = useAppSelector(insureSelector);
  const { setSearchInsurances } = useActions();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setSearchInsurances(event.target.value);
  };

  const dataSource = useMemo(
    () => insurancesFilter.map((data) => ({ ...data, key: `${data.id}` })),
    [insurancesFilter.length]
  );

  const dataColumns = useMemo(() => {
    return [
      {
        title: "№ договора",
        dataIndex: "number",
        key: "number",
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
        render: (_, record: IInsurance) => (
          <Space size="middle" className="flex justify-center">
            <Button
              icon={<EditOutlined />}
              onClick={() => console.log(record)}
              type="primary"
            ></Button>
          </Space>
        ),
      },
    ];
  }, []);

  return (
    <div>
      <HomeInfoLayout value={searchValue} onChange={handleChange}>
        <div className="flex space-x-2 justify-end mb-3">
          <Button variant="solid" color="primary" icon={<PlusOutlined />}>
            Добавить
          </Button>
          <Button
            variant="solid"
            color="primary"
            icon={<UnorderedListOutlined />}
          >
            Выбрать
          </Button>
          <Button variant="solid" color="primary" icon={<ToolOutlined />}>
            Редактировать
          </Button>
        </div>
        <Table dataSource={dataSource} columns={dataColumns} size="large" />
      </HomeInfoLayout>
    </div>
  );
};
