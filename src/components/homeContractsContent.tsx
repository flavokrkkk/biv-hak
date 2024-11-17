import { EditOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useActions } from "@hooks/useActions";
import { useAppSelector } from "@hooks/useAppSelector";
import { IInsurance, IInsuranceResponseData } from "@models/common";
import { insureSelector } from "@redux/selectors";
import { ERoutesNames } from "@utils/route";
import HomeInfoLayout from "@views/layout/homeInfoLayout";
import { Button, Space, Table } from "antd";
import { ChangeEvent, FC, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export const HomeContractsContent = () => {
  const [searchValue, setSearchValue] = useState("");
  const { insurancesFilter } = useAppSelector(insureSelector);
  const { setSearchInsurances } = useActions();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setSearchInsurances(event.target.value);
  };

  const dataSource = useMemo(() => {
    const sss = insurancesFilter.map((data) => ({
      ...data,
      key: `${data.id}`,
      expiresIn: `${new Date(data.expiresIn).getDate()}.${
        new Date(data.expiresIn).getMonth() + 1
      }.${new Date(data.expiresIn).getFullYear()}`,
    }));
    return sss;
  }, [insurancesFilter.length, insurancesFilter]);

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
              icon={
                <Link to={`${ERoutesNames.HOME_REESTR}/${record.id}`}>
                  <EditOutlined />
                </Link>
              }
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
          <Button
            variant="solid"
            color="primary"
            icon={<UnorderedListOutlined />}
          >
            Выбрать
          </Button>
        </div>
        <Table
          dataSource={dataSource}
          columns={dataColumns}
          size="large"
          loading={!insurancesFilter.length}
        />
      </HomeInfoLayout>
    </div>
  );
};
