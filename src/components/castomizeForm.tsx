import { Tag } from "antd";
import Input from "antd/es/input/Input";
import { FC } from "react";

interface ICastomizeForm {
  parametres: { value: string; private: string }[];
}

const CastomizeForm: FC<ICastomizeForm> = ({ parametres }) => {
  return (
    <form>
      <div className="bg-white flex justify-between p-6 rounded-lg space-x-4">
        <div className="flex flex-col w-full">
          <section className="flex items-center  space-x-3">
            <h1 className="font-medium text-2xl mb-4">
              Добавление кастомных полей
            </h1>
            <Tag bordered={false} color="geekblue" className="mb-2">
              castom field
            </Tag>
          </section>
          {!parametres.length ? (
            <div className="border border-dashed min-h-[388px] rounded-lg" />
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 ">
              {parametres.map((param, index) => (
                <div key={index} className="flex flex-col space-y-1">
                  <label>{param.value}</label>
                  <Input placeholder={param.value} size="large" required />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default CastomizeForm;
