import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FixedSizeList } from "react-window";

import InputSearch from "../../../components/InputSearch";
import styles from "./Search.module.css";
import CssCircularProgress from "../../../components/CssCircularProgress";
import ResultItem from "../../../components/ResultItem";

const Search = ({ searchValue, setSearchValue, loading, result }) => {
  return (
    <Box className={styles.searchGlobal}>
      <Typography variant="h6" margin={2}>
        Search the entire base of the empire
      </Typography>
      <Box className={styles.divInput}>
        <InputSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Box>
      <Box>
        {loading && <CssCircularProgress className={styles.toto} />}
        {result === null && !loading && (
          <Typography className={styles.text}>
            The base of the Empire is waiting for you!
          </Typography>
        )}
        {result !== null && result.length === 0 && (
          <Typography className={styles.text}>
            We found nothing in the Empire's base!
          </Typography>
        )}
        {result !== null && result.length > 0 && (
          <FixedSizeList
            height={600}
            width={360}
            itemSize={46}
            itemCount={result.length}
            overscanCount={10}
            itemData={result}
          >
            {ResultItem}
          </FixedSizeList>
        )}
      </Box>
    </Box>
  );
};

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  result: PropTypes.arrayOf(PropTypes.object.isRequired),
};
export default Search;
