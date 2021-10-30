import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDetailQuery } from "../../../api/apiSlice";

import Detail from "../../components/Detail";

const DetailContainer = () => {
  const { type, name } = useParams();
  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);
  const { data, isFetching, isSuccess } = useDetailQuery({
    type: type,
    name: name,
  });

  useEffect(() => {
    if (isFetching) {
      setLoading(true);
    } else if (isSuccess) {
      setLoading(false);
      setResult(data);
    }
  }, [data, isFetching, isSuccess]);

  return <Detail result={result} loading={loading} type={type} />;
};

export default DetailContainer;
