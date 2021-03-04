// import { useSelector } from "react-redux";
import { studentData } from "./studentData";

export const setStudenList = async () => {
  return localStorage.setItem("studentList", JSON.stringify(studentData));
};

export const getStudentList = async () => {
  const studentList = localStorage.getItem("studentList");
  return JSON.parse(studentList);
};
