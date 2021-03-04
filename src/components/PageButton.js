import React from "react";
import style from "./PageButton.module.css";
import { moveExactlyToPage } from "../action/actionCreator";
import { useDispatch, useSelector } from "react-redux";

export default function PageButton({ number }) {
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const dispatch = useDispatch();

  const handleMoveExactlyToPage = () => {
    dispatch(moveExactlyToPage(number));
  };
  return (
    <button
      className={
        number === currentPage ? style.buttonActive : style.buttonDefault
      }
      onClick={handleMoveExactlyToPage}
    >
      {number}
    </button>
  );
}
