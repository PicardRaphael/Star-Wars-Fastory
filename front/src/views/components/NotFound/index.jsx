import Box from "@mui/material/Box";
import styles from "./NotFound.module.css";
import notFound from "../../../assets/images/planet-404.png";
import { Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box className={styles.notFound}>
      <Box className={styles.notFoundImage}>
        <strong className={styles.number}>4</strong>
        <img src={notFound} alt="not-found" loading="lazy" />
        <strong className={styles.number}>4</strong>
      </Box>
      <Typography>THIS PAGE IS NOT FULLY ARMED AND OPERATIONAL.</Typography>
      <Typography className={styles.try}>TRY SOMETHING ELSE?</Typography>
    </Box>
  );
};

export default NotFound;
