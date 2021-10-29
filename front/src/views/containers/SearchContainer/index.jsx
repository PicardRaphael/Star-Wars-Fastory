import { useEffect, useState } from "react";
import { useSearchAnywhereQuery } from "../../../api/apiSlice";
import Search from "../../components/Search";

const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  const [skip, setSkip] = useState(true);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchValue !== "") {
      setSkip(false);
    } else {
      setSkip(true);
      setResult(null);
      setLoading(false);
    }
  }, [searchValue]);

  const { data, isFetching, isSuccess } = useSearchAnywhereQuery(searchValue, {
    skip,
  });

  useEffect(() => {
    if (isFetching) {
      setLoading(true);
    } else if (isSuccess) {
      setLoading(false);
      setResult(data);
      setSkip(true);
    }
  }, [data, isFetching, isSuccess]);
  return (
    <Search
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      loading={loading}
      result={result}
    />
  );
};

export default SearchContainer;
