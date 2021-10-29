import React from "react";
import PropTypes from "prop-types";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import styles from "./ResultItem.module.css";
import { Link } from "react-router-dom";

const ResultItem = ({ result }) => (
  <ListItem className={styles.item}>
    <Link className={styles.link} to={`/details/${result.name}`}>
      <ListItemText className={styles.text}>{result.name}</ListItemText>
    </Link>
  </ListItem>
);

ResultItem.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResultItem;
