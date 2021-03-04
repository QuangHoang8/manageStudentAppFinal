import React from "react";
import style from "./Pagination.module.css";
import { useSelector, useDispatch } from "react-redux";
import PageButton from "./PageButton";
import { moveToNextPage, moveToPreViousPage } from "../action/actionCreator";

export default function Pagination() {
  const pageNumbers = useSelector((state) => state.pagination.pageNumbers);
  const startPagesButtonRendered = useSelector(
    (state) => state.pagination.startPagesButtonRendered
  );

  const dispatch = useDispatch();

  const handleMoveToPreviousPage = () => {
    dispatch(moveToPreViousPage());
  };

  const handleMoveToNextPage = () => {
    dispatch(moveToNextPage());
  };
  const renderPageButton = (number) => {
    if (
      number <= startPagesButtonRendered + 2 &&
      number >= startPagesButtonRendered
    ) {
      return <PageButton key={number} number={number} />;
    }
  };
  return (
    <div className={style.pages}>
      <button onClick={handleMoveToPreviousPage}>&lt;</button>
      {pageNumbers.map((number) => renderPageButton(number))}
      <button onClick={handleMoveToNextPage}>&gt;</button>
    </div>
  );
}
