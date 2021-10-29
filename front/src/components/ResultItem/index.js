import React from "react";
import PropTypes from "prop-types";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import styles from "./ResultItem.module.css";
import { Link } from "react-router-dom";

const ResultItem = ({ index, data, style }) => (
  <ListItem component="div" key={index} className={styles.item} style={style}>
    <Link className={styles.link} to={`/detail/${data[index].name}`}>
      <ListItemText className={styles.text}>{data[index].name}</ListItemText>
    </Link>
  </ListItem>
);

ResultItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default ResultItem;
