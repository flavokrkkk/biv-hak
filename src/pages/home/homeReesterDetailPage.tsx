import { EditOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import HomeReesterContent from "@components/homeReesterContent";
import { useActions } from "@hooks/useActions";
import { useAppSelector } from "@hooks/useAppSelector";
import { insureSelector, partnersSelector } from "@redux/selectors";
import { Button } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const HomeReesterDetailPage = () => {
  const { id } = useParams();
  const { filterPartners } = useAppSelector(partnersSelector);
  const { getInsurancesById } = useActions();
  const { selectInsurance } = useAppSelector(insureSelector);

  useEffect(() => {
    if (id) {
      getInsurancesById(Number(id));
    }
  }, [id]);

  if (!selectInsurance) {
    return <LoadingOutlined />;
  }

  return (
    <HomeReesterContent
      filterPartners={filterPartners}
      selectInsurance={selectInsurance}
    />
  );
};
