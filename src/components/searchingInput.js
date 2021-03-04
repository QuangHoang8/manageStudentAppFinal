import style from "./searchingInput.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  findStudent,
  changeInputSearchStudent,
  changePageNumbers,
  moveExactlyToPage,
  changeStartPagesButtonRendered,
} from "../action/actionCreator";
import SearchIcon from "@material-ui/icons/Search";

export const SearchingInput = () => {
  const studentInputValue = useSelector((state) => state.students.studentInfo);
  const studentLists = useSelector((state) => state.students.studentList);
  const studentSearchList = useSelector(
    (state) => state.students.studentSearchList
  );
  const isSearching = useSelector((state) => state.students.isSearching);

  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(changeInputSearchStudent(value));
  };
  function handleSearch() {
    dispatch(findStudent());
    dispatch(moveExactlyToPage(1));
  }

  function handlePageNumbers() {
    if (isSearching) {
      dispatch(changePageNumbers(studentSearchList.length));
      dispatch(changeStartPagesButtonRendered(1));
    } else {
      dispatch(changePageNumbers(studentLists.length));
    }
  }

  return (
    <div className={style.search_area}>
      <input
        type="text"
        value={studentInputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <SearchIcon
        className={style.search_button}
        onMouseDown={handleSearch}
        onMouseUp={handlePageNumbers}
      />
    </div>
  );
};
