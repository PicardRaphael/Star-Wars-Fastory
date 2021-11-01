import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import styles from "./Info.module.css";

const Info = ({ info, text }) => (
  <Typography className={styles.info}>
    {text} <span>{info}</span>
  </Typography>
);

Info.propTypes = {
  info: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Info;
