import { useParams } from "react-router-dom";

export const HomeReesterDetailPage = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};
