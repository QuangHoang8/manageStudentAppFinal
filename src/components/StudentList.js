import React from "react";
import style from "./StudentList.module.css";
import StudentItem from "./StudentItem";
// import { studentData } from "../studentData";
import { useSelector } from "react-redux";
// import { setStudenList } from "../StudentService";

export default function StudentList() {
  const isFinded = useSelector((state) => state.students.isFinded);
  const isSearching = useSelector((state) => state.students.isSearching);
  const studentList = JSON.parse(localStorage.getItem("studentList"));
  const studentFinded = useSelector(
    (state) => state.students.studentSearchList
  );

  const currentPage = useSelector((state) => state.pagination.currentPage);

  const renderStudentList = () =>
    studentList
      .slice((currentPage - 1) * 6, currentPage * 6)
      .map((student) => <StudentItem key={student.id} student={student} />);

  const renderSearchedList = () => {
    return isFinded ? (
      studentFinded
        .slice((currentPage - 1) * 6, currentPage * 6)
        .map((student) => <StudentItem key={student.id} student={student} />)
    ) : (
      <div className={style.studentItem}>
        <div className={style.name}>Không tìm thấy sinh viên nào</div>
      </div>
    );
  };

  return isSearching ? (
    <div className={style.list}>{renderSearchedList()}</div>
  ) : (
    <div className={style.list}>{renderStudentList()}</div>
  );
}
