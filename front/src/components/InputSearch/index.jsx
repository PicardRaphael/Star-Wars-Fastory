import React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./InputSearch.module.css";

const InputSearch = ({ searchValue, setSearchValue }) => (
  <Box className={styles.divGlobal}>
    <Box className={styles.divInput}>
      <SearchIcon className={styles.logo} />
      <InputBase
        className={styles.input}
        placeholder="Chercher…"
        value={searchValue}
        onChange={(evt) => setSearchValue(evt.target.value)}
      />
    </Box>
  </Box>
);

InputSearch.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default InputSearch;
