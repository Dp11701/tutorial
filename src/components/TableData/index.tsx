import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { ReactComponent as Add } from "../../assets/images/e-add.svg";
import { ReactComponent as Filter } from "../../assets/images/filter.svg";
import { ReactComponent as Cancel } from "../../assets/images/cancel.svg";
import { ReactComponent as Waiting } from "../../assets/images/Waiting.svg";
import { ReactComponent as CancelEnable } from "../../assets/images/ComboCancel.svg";
import { ReactComponent as CancelNotEnable } from "../../assets/images/Combo.svg";
import { ReactComponent as Down } from "../../assets/images/down-arrow.svg";
import { ReactComponent as Left } from "../../assets/images/left-arrow.svg";
import { ReactComponent as Right } from "../../assets/images/right-arrow.svg";
import { ReactComponent as DividerFooter } from "../../assets/images/Divider.svg";
import { ReactComponent as Accept } from "../../assets/images/accept.svg";
import { ReactComponent as Gotopage } from "../../assets/images/Content title.svg";

import styles from "./style.module.css";
import fakeData from "../../assets/data/Fakedata";
import { Button } from "@mui/material";

export default function TableData() {
  const [currentPage, setCurrentPage] = useState(1);
  const [gotoPage, setGotoPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fakeData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(fakeData.length / itemsPerPage);
  const handleSelectPage = (number: any) => {
    setCurrentPage(number);
  };
  const handlePageChange = (newPage: any) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  const handleGotoPage = () => {
    if (gotoPage >= 1 && gotoPage <= totalPages) {
      setCurrentPage(gotoPage);
      setGotoPage(1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Typography className={styles.mainText}>Quản lý ticket</Typography>
          <Typography className={styles.subText}>
            Quản lý các yêu cầu cập nhật cho ứng dụng, cho phép người dùng thay
            đổi thông tin hoặc yêu cầu cập nhật khác.
          </Typography>
        </div>
        <div className={styles.right}>
          <Button className={styles.addButton}>
            <Add />
            <Typography className={styles.addButtonText}>Tạo Ticket</Typography>
          </Button>
        </div>
      </div>
      <div>
        <table className={styles.fullWidthTable}>
          <thead>
            <tr className={styles.headerTable}>
              <th>
                <Typography>ID</Typography>
              </th>
              <th className={styles.title}>
                <Typography style={{ margin: "0" }}>Loại yêu cầu</Typography>
                <Filter className={styles.filter} />
              </th>
              <th>
                <Typography>Người tạo</Typography>
              </th>
              <th>
                <Typography>Ngày tạo</Typography>
              </th>
              <th>
                <Typography>Ngày cập nhật</Typography>
              </th>
              <th className={styles.title}>
                <Typography>Trạng thái</Typography>{" "}
                <Filter className={styles.filter} />
              </th>
              <th>
                <Typography>Hành động</Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className={styles.data}>
                <td
                  className={styles.centeredCell}
                  style={{ color: "#4373E4" }}
                >
                  {item.id}
                </td>
                <td className={styles.centeredCell}>{item.type}</td>
                <td className={styles.centeredCell}>{item.createBy}</td>
                <td className={styles.centeredCell}>{item.createdDate}</td>
                <td className={styles.centeredCell}>{item.updatedDate}</td>
                <td className={styles.centeredCell}>
                  {item.status === "Waiting" && <Waiting />}
                  {item.status === "Cancelled" && <Cancel />}
                  {item.status === "Accept" && <Accept />}
                </td>
                <td className={styles.centeredCell}>
                  {item.status === "Waiting" && <CancelEnable />}
                  {item.status === "Cancelled" && <CancelNotEnable />}
                  {item.status === "Accept" && <CancelNotEnable />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.footer}>
          <Divider variant="middle" />
          <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
              <Button className={styles.footerButton}>
                5 <Down style={{ marginLeft: "8px" }} />
              </Button>
              <Typography>of {fakeData.length} items</Typography>
            </div>
            <div className={styles.footerRight}>
              <Left onClick={() => handlePageChange(currentPage - 1)} />
              {Array.from({ length: totalPages }, (_, index) => (
                <Typography
                  key={index}
                  className={
                    currentPage === index + 1 ? styles.selected : styles.number
                  }
                  onClick={() => handleSelectPage(index + 1)}
                >
                  {index + 1}
                </Typography>
              ))}
              <Right onClick={() => handlePageChange(currentPage + 1)} />
              <DividerFooter />
              <Gotopage />
              <Button className={styles.footerButton} onClick={handleGotoPage}>
                <input
                  type="number"
                  value={gotoPage}
                  onChange={(e) => setGotoPage(parseInt(e.target.value))}
                  className={styles.footerInput}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
