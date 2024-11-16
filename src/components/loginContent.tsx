import { authorizate } from "@api/authResponse/request";
import LogoIcon from "@assets/social/logoIcon";
import { IAuthRequestData } from "@models/common";
import { EAuthTypes } from "@utils/common";
import { ERoutesNames } from "@utils/route";
import { Button, Checkbox, Input, message } from "antd";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cookies from "js-cookie";
import { useActions } from "@hooks/useActions";

const LoginContent = () => {
  const [loginType, setLoginType] = useState<EAuthTypes>(EAuthTypes.AGENT);
  const [requestValue, setRequestValue] = useState<IAuthRequestData>({
    password: "",
    username: "",
  });
  const { saveData } = useActions();
  const navigate = useNavigate();

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
    setLoginType(event.currentTarget.value as EAuthTypes);
  };

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data, status } = await authorizate(requestValue, loginType);
    setRequestValue({ password: "", username: "" });
    if (status !== 200) return message.error("Проверьте данные!");
    message.success("Успешный вход");
    navigate(ERoutesNames.DEFAULT);
    cookies.set("access_token", data.accessToken);
    cookies.set("refresh_token", data.refreshToken);
    cookies.set("type", loginType);
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
        <h1 className="text-3xl font-semibold text-center">Войти как</h1>
        <div className="flex justify-center space-x-2 items-center">
          <Button
            variant={loginType === EAuthTypes.AGENT ? "solid" : "outlined"}
            color={"default"}
            className="w-[180px]"
            value={EAuthTypes.AGENT}
            onClick={handleActiveType}
          >
            Страховой агент
          </Button>
          <Button
            variant={loginType === EAuthTypes.COMPANY ? "solid" : "outlined"}
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
              type="text"
              value={requestValue.username}
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
            Войти
          </Button>
        </div>
      </form>
      <div className="flex justify-center space-x-5 text-sm">
        <span>Нет аккаунта?</span>
        <Link to={ERoutesNames.REGISTER} className="text-blue-500">
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};

export default LoginContent;
