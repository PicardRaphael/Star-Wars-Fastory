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
        Rechercher dans toute la base de l'empire
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
            La base de l'Empire vous attends !
          </Typography>
        )}
        {result !== null && result.length === 0 && (
          <Typography className={styles.text}>
            Nous n'avons rien trouvé dans la base de l'Empire !
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

export default Search;
