import { LoadingOutlined } from "@ant-design/icons";
import { useActions } from "@hooks/useActions";
import { useAppSelector } from "@hooks/useAppSelector";
import { partnersSelector } from "@redux/selectors";
import { ERoutesNames } from "@utils/route";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const HomePartnersDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setSelectPartner } = useActions();
  const { selectPartner } = useAppSelector(partnersSelector);

  useEffect(() => {
    if (id) {
      setSelectPartner(Number(id));
    }
  }, [id, selectPartner]);

  return <div>{selectPartner?.name}</div>;
};

export default HomePartnersDetailPage;
