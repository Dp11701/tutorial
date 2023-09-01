import React from "react";
import Header from "../../components/Header";
import styles from "./style.module.css";
import Sidebar from "../../components/Sidebar";
import TableData from "../../components/TableData";

export default function Ticket() {
  
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentWithSidebar}>
        <Sidebar/>
        <TableData />
      </div>
    </div>
  );
}
