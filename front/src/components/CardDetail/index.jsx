import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import styles from "./CardDetail.module.css";
import Info from "../Info";

const CardDetail = ({
  title,
  description,
  result,
  infosTop,
  infosMiddle,
  infosBottom,
}) => (
  <Card className={styles.card}>
    {title && (
      <CardHeader title={<Typography variant="h6">{title}</Typography>} />
    )}
    <CardContent className={styles.cardContent}>
      {infosTop && (
        <Box className={styles.infos}>
          {infosTop.map(
            (info) =>
              result[Object.keys(info)] && (
                <Info
                  key={Object.keys(info)}
                  info={result[Object.keys(info)]}
                  text={Object.values(info).toString()}
                />
              )
          )}
        </Box>
      )}
      {infosMiddle && (
        <Box className={styles.infos}>
          {infosMiddle.map(
            (info) =>
              result[Object.keys(info)] && (
                <Info
                  key={Object.keys(info)}
                  info={result[Object.keys(info)]}
                  text={Object.values(info).toString()}
                />
              )
          )}
        </Box>
      )}
      {infosBottom && (
        <Box className={styles.infos}>
          {infosBottom.map(
            (info) =>
              result[Object.keys(info)] && (
                <Info
                  key={Object.keys(info)}
                  info={result[Object.keys(info)]}
                  text={Object.values(info).toString()}
                />
              )
          )}
        </Box>
      )}
      {description && (
        <Box className={styles.description}>
          <Typography>{description}</Typography>
        </Box>
      )}
    </CardContent>
  </Card>
);

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  result: PropTypes.object,
  infosTop: PropTypes.arrayOf(PropTypes.object),
  infosMiddle: PropTypes.arrayOf(PropTypes.object),
  infosBottom: PropTypes.arrayOf(PropTypes.object),
};
export default CardDetail;
