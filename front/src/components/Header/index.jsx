import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./Header.module.css";

const Header = () => (
  <AppBar position="static" className={styles.appBar}>
    <Toolbar className={styles.toolbar}>
      <Typography variant="h1" noWrap className={styles.title}>
        Star Wars Fastory
      </Typography>
      <Box>
        <NavLink exact activeClassName="active" className={styles.link} to="/">
          Search
        </NavLink>
      </Box>
    </Toolbar>
  </AppBar>
);
export default Header;
