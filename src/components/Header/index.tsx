import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../store/store";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { ReactComponent as Noti } from "../../assets/images/Noti.svg";
import { ReactComponent as Avatar } from "../../assets/images/avatar.svg";
import { ReactComponent as Flag } from "../../assets/images/flag.svg";
import { ReactComponent as Menu } from "../../assets/images/menu-svgrepo-com.svg";

import styles from "./style.module.css";

export default function Header() {
  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="static"
      className={`${styles.container} ${isSticky ? styles.sticky : ""}`}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className={styles.content}>
          <div className={styles.left}>
            <Menu className={styles.menu} onClick={handleMenuToggle} />
            <Logo className={styles.logo} />
            <Typography className={styles.cardInfo}>meID</Typography>
          </div>
          <div className={styles.right}>
            <Search className={`${styles.icon} ${styles.mobile}`} />
            <Noti className={styles.icon} />
            <Flag className={`${styles.icon} ${styles.mobile}`} />
            <Avatar className={styles.icon} />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
