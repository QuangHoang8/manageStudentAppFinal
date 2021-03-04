import React from "react";
import style from "./Header.module.css";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.top_area}>
        <h2>Quản lý sinh viên</h2>
        <Link to="/NewStudent" className={style.link}>
          <button className={style.button}>
            <AddIcon />
            <span>Thêm mới</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
