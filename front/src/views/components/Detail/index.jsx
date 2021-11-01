import React from "react";
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { v4 as uuidv4 } from "uuid";
import CssCircularProgress from "../../../components/CssCircularProgress";
import styles from "./Detail.module.css";

const Detail = ({ loading, result, type, types }) => {
  const Component = types[type];
  return (
    <Box>
      {(loading || !result) && <CssCircularProgress />}
      {!loading && result && (
        <Grid
          container
          justifyContent="center"
          className={styles.gridContainer}
        >
          {result.map((item) => (
            <React.Suspense key={uuidv4()} fallback={<CssCircularProgress />}>
              <Grid xl={6} xs={12} item className={styles.gridItem}>
                <Component result={item} />
              </Grid>
            </React.Suspense>
          ))}
        </Grid>
      )}
    </Box>
  );
};

Detail.propTypes = {
  loading: PropTypes.bool.isRequired,
  result: PropTypes.arrayOf(PropTypes.object.isRequired),
  type: PropTypes.string.isRequired,
  types: PropTypes.object.isRequired,
};

export default Detail;
