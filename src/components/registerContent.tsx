import { registration } from "@api/authResponse/request";
import LogoIcon from "@assets/social/logoIcon";
import { IRegisterRequestData } from "@models/common";
import { EAuthTypes } from "@utils/common";
import { ERoutesNames } from "@utils/route";
import { Button, Checkbox, Input, message } from "antd";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cookies from "js-cookie";
import { authActions } from "@redux/reducers/auth/authSlice";
import { useDispatch } from "react-redux";
import { useActions } from "@hooks/useActions";

export const RegisterContent = () => {
  const [registerType, setRegisterType] = useState<EAuthTypes>(
    EAuthTypes.AGENT
  );
  const [requestValue, setRequestValue] = useState<IRegisterRequestData>({
    password: "",
    username: "",
    email: "",
  });
  const navigate = useNavigate();
  const { saveData } = useActions();
  const handleChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setRequestValue((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

  const handleActiveType = (event: React.MouseEvent<HTMLButtonElement>) => {
    setRegisterType(event.currentTarget.value as EAuthTypes);
  };

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data, status } = await registration(requestValue, registerType);
    setRequestValue({ password: "", username: "", email: "" });
    if (status !== 200) return message.error("Ошибка!");
    message.success("Успешная регистрация!");
    navigate(ERoutesNames.DEFAULT);
    cookies.set("access_token", data.accessToken);
    cookies.set("refresh_token", data.refreshToken);
    cookies.set("type", registerType);
    saveData(data);
    return data;
  };

  return (
    <div>
      <form
        className="flex flex-col space-y-7 p-10 w-[414px]"
        onSubmit={onFormSubmit}
      >
        <div className="flex justify-center">
          <LogoIcon />
        </div>
        <h1 className="text-3xl font-semibold text-center">
          Зарегистрироваться как
        </h1>
        <div className="flex justify-center space-x-2 items-center">
          <Button
            variant={registerType === EAuthTypes.AGENT ? "solid" : "outlined"}
            color={"default"}
            className="w-[180px]"
            value={EAuthTypes.AGENT}
            onClick={handleActiveType}
          >
            Страховой агент
          </Button>
          <Button
            variant={registerType === EAuthTypes.COMPANY ? "solid" : "outlined"}
            color={"default"}
            className="w-[180px]"
            value={EAuthTypes.COMPANY}
            onClick={handleActiveType}
          >
            Сотрудник компании
          </Button>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <Input
              required={true}
              size="large"
              placeholder="Username"
              name="username"
              value={requestValue.username}
              onChange={handleChangeValue}
            />
            <Input
              required={true}
              size="large"
              placeholder="Email"
              name="email"
              value={requestValue.email}
              onChange={handleChangeValue}
            />
            <Input
              required={true}
              size="large"
              placeholder="Password"
              name="password"
              type="password"
              value={requestValue.password}
              onChange={handleChangeValue}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="flex space-x-1">
              <Checkbox />
              <h3>Запомнить меня</h3>
            </span>
            <span className="cursor-pointer">Забыл пароль</span>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            className="w-full rounded-3xl"
            color="default"
            variant="solid"
            size="large"
            htmlType="submit"
          >
            Регистрация
          </Button>
        </div>
      </form>
      <div className="flex justify-center space-x-5 text-sm">
        <span>Есть аккаунт?</span>
        <Link to={ERoutesNames.LOGIN} className="text-blue-500">
          Войдите
        </Link>
      </div>
    </div>
  );
};
