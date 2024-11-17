import { ToolOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useActions } from "@hooks/useActions";
import { IInsuranceResponseData, IPartner } from "@models/common";
import { ERoutesNames } from "@utils/route";
import { Button, DatePicker, Input, message, Select } from "antd";
import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import AgentList from "./agentList";
import { rootCheck } from "@helpers/rootCheck";

interface IHomeReesterContent {
  filterPartners: IPartner[];
  selectInsurance: IInsuranceResponseData;
}

const HomeReesterContent: FC<IHomeReesterContent> = ({
  filterPartners,
  selectInsurance,
}) => {
  const [editValue, setEditValue] = useState({
    id: selectInsurance.id,
    expiresIn: "",
    riskInsurance: selectInsurance.riskInsurance,
    objectInsurance: selectInsurance.objectInsurance,
  });
  const { deleteInsurance } = useActions();
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const { setInsuranceUpdate } = useActions();
  const checkRoot = rootCheck();
  const handleIsEdit = () => setIsEdit((prevState) => !prevState);

  const handleChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEditValue((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

  const handleDelete = () => {
    deleteInsurance(selectInsurance.id);
    message.info("Удалено!");
    navigate(ERoutesNames.HOME_REESTR);
  };

  const handleAddAsignAgent = (param: IPartner) => {
    setInsuranceUpdate({
      ...selectInsurance,
      agents: [
        {
          agentId: param.id,
          permissions: [],
        },
      ],
    });
    message.success("Усешное добавление партнера в сделку!");
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInsuranceUpdate({
      ...selectInsurance,
      riskInsurance: editValue.riskInsurance,
      objectInsurance: editValue.objectInsurance,
      agents: [
        {
          agentId: editValue.id,
          permissions: [],
        },
      ],
    });
    message.success("Усешное изменение договора!");
  };

  return (
    <div className="flex flex-col space-y-3  w-[1140px] mx-auto">
      {checkRoot && (
        <div className="flex space-x-2 justify-end">
          <Button
            variant="solid"
            color="default"
            icon={<UnorderedListOutlined />}
          >
            Выбрать
          </Button>
          <Button
            variant="solid"
            color="primary"
            icon={<ToolOutlined />}
            onClick={handleIsEdit}
          >
            {isEdit ? "Не сохранять" : "Редактировать"}
          </Button>
        </div>
      )}

      <form
        className="bg-white flex  p-5 rounded-lg flex-col space-y-10"
        onSubmit={onFormSubmit}
      >
        <section className="flex w-full space-x-5">
          <div className="flex flex-col space-y-1 w-full">
            <h1 className="font-medium text-2xl mb-2">Общие сведения</h1>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-1">
                <label>Номер договора</label>
                <Input
                  required
                  size="large"
                  value={editValue.id}
                  name="id"
                  disabled={!isEdit}
                  onChange={handleChangeValue}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label>Дата окончания действия договора</label>
                <DatePicker size="large" disabled={!isEdit} required />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <h1 className="font-medium text-2xl mb-2">Доступные услуги</h1>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-1">
                <label>Риск страхования</label>
                <Input
                  required
                  size="large"
                  value={editValue.riskInsurance}
                  disabled={!isEdit}
                  name="riskInsurance"
                  onChange={handleChangeValue}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label>Объект страхования</label>
                <Input
                  required
                  size="large"
                  name="objectInsurance"
                  value={editValue.objectInsurance}
                  disabled={!isEdit}
                  onChange={handleChangeValue}
                />
              </div>
            </div>
          </div>
        </section>

        {isEdit && (
          <div className="w-full flex-col flex space-y-4">
            <Button variant="dashed" color="primary" htmlType="submit">
              Сохранить
            </Button>
            <Button
              variant="solid"
              color="danger"
              htmlType="submit"
              onClick={handleDelete}
            >
              Удалить
            </Button>
          </div>
        )}
      </form>
      <div className="flex flex-col space-y-2 ">
        {filterPartners.map((partner) => (
          <AgentList
            key={partner.id}
            partner={partner}
            setAgent={handleAddAsignAgent}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeReesterContent;
