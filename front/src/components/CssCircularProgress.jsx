import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styles from "../styles/CssCircularProgress.module.css";

const CssCircularProgress = () => {
  return (
    <Box className={styles.position}>
      <CircularProgress />
    </Box>
  );
};

export default CssCircularProgress;
