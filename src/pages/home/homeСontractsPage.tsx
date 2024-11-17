import { FC, useEffect } from "react";
import { HomeContractsContent } from "@components/homeContractsContent";
import { useActions } from "@hooks/useActions";
import { useAppSelector } from "@hooks/useAppSelector";
import { authSelector } from "@redux/selectors";

export const HomeСontractsPage: FC = () => {
  const { getInsurance } = useActions();
  const { user } = useAppSelector(authSelector);
  console.log(user);
  useEffect(() => {
    if (user?.id) {
      getInsurance(user?.id);
    }
  }, []);

  return <HomeContractsContent />;
};
