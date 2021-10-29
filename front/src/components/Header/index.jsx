import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./Header.module.css";

const Header = () => (
  <AppBar position="static" className={styles.appBar}>
    <Toolbar>
      <Typography variant="h1" noWrap className={styles.title}>
        Star Wars Fastory
      </Typography>
    </Toolbar>
  </AppBar>
);
export default Header;
