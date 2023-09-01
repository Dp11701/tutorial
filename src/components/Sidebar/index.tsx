import React, { useState } from "react";
import { Button, MenuItem, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState, toggleMenu } from "../../store/store";
import { ReactComponent as Home } from "../../assets/images/home.svg";
import { ReactComponent as Down } from "../../assets/images/down-arrow.svg";
import { ReactComponent as Star } from "../../assets/images/star.svg";
import { ReactComponent as Ticket } from "../../assets/images/ticket.svg";
import { ReactComponent as Layer } from "../../assets/images/Layer_1.svg";
import { ReactComponent as MenuIcon } from "../../assets/images/menu.svg";
import { ReactComponent as Up } from "../../assets/images/up-arrow.svg";
import { ReactComponent as Person } from "../../assets/images/person-user.svg";
import { ReactComponent as Check } from "../../assets/images/check-double.svg";
import { ReactComponent as Frame } from "../../assets/images/Frame.svg";
import { ReactComponent as PersonCheck } from "../../assets/images/person-check.svg";


import styles from "./style.module.css";

export default function Sidebar() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(
    (state: RootState) => state.sidebar.isMenuOpen
  );
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  const handleMenuItemClick = (menuItem: any) => {
    setSelectedMenuItem(menuItem);
  };
  return (
    <div className={`${isMenuOpen ? styles.mobile : styles.wrapper} `}>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <div className={styles.naviText}>
            <Home className={styles.naviIcon} />
            <Typography>Trang chủ</Typography>
          </div>
          <Down />
        </div>
        <div className={styles.divider}>
          <Typography className={styles.dividerContent}>DỊCH VỤ</Typography>
          <div className={styles.dividerLine}></div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.naviText}>
            <Star className={styles.naviIcon} />
            <Typography>Dịch vụ của tôi</Typography>
          </div>
          <Down />
        </div>
        <div className={styles.navigation}>
          <div className={styles.naviText}>
            <Ticket className={styles.naviIcon} />
            <Typography>Ticket hỗ trợ</Typography>
          </div>
          <Down />
        </div>
        <div className={styles.divider}>
          <Typography className={styles.dividerContent}>
            DOANH NGHIỆP
          </Typography>
          <div className={styles.dividerLine}></div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.naviText}>
            <Layer className={styles.naviIcon} />
            <Typography>Doanh nghiệp</Typography>
          </div>
          <Down />
        </div>
        <div
          className={`${styles.navigation} ${
            isMenuOpen ? styles.openMenu : ""
          }`}
          onClick={handleMenuToggle}
        >
          <div className={styles.naviText}>
            <MenuIcon className={styles.naviIcon} />
            <Typography>Quản lý ứng dụng</Typography>
          </div>
          {isMenuOpen ? <Up /> : <Down />}
        </div>
        {isMenuOpen && (
          <div className={styles.menu}>
            <MenuItem
              onClick={() => handleMenuItemClick("Quản lý phiên bản")}
              className={
                selectedMenuItem === "Quản lý phiên bản" ? styles.selected : ""
              }
            >
              Quản lý phiên bản
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("Phân quyền thành viên")}
              className={
                selectedMenuItem === "Phân quyền thành viên"
                  ? styles.selected
                  : ""
              }
            >
              Phân quyền thành viên
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("Thông tin thiết lập chung")}
              className={
                selectedMenuItem === "Thông tin thiết lập chung"
                  ? styles.selected
                  : ""
              }
            >
              Thông tin thiết lập chung
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("Quản lý ticket đăng ký")}
              className={
                selectedMenuItem === "Quản lý ticket đăng ký"
                  ? styles.selected
                  : ""
              }
            >
              Quản lý ticket đăng ký
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("Tích hợp thanh toán ")}
              className={
                selectedMenuItem === "Tích hợp thanh toán "
                  ? styles.selected
                  : ""
              }
            >
              Tích hợp thanh toán
            </MenuItem>
          </div>
        )}
        <div className={styles.divider}>
          <Typography className={styles.dividerContent}>TÀI KHOẢN</Typography>
          <div className={styles.dividerLine}></div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.naviText}>
            <Person className={styles.naviIcon} />
            <Typography>Thông tin tài khoản</Typography>
          </div>
          <Down />
        </div>
        <div className={styles.navigation}>
          <div className={styles.naviText}>
            <Check className={styles.naviIcon} />
            <Typography>Đối soát</Typography>
          </div>
          <Down />
        </div>
        <div className={styles.navigation}>
          <div className={styles.naviText}>
            <Frame className={styles.naviIcon} />
            <Typography>Hóa đơn</Typography>
          </div>
          <Down />
        </div>
        <div className={styles.divider}>
          <Typography className={styles.dividerContent}>
            TRẠNG THÁI TÀI KHOẢN
          </Typography>
          <div className={styles.dividerLine}></div>
        </div>
        <Button className={styles.button}>
          <PersonCheck />
          <Typography className={styles.buttonText}>Xác thực ngay</Typography>
        </Button>
      </div>
    </div>
  );
}
