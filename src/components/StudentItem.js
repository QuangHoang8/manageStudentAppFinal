import React from "react";
import style from "./StudentItem.module.css";
import { Male, Female } from "react-gender";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  editingId,
  editingImg,
  editingName,
  editingPhoneNumber,
  editingBirthday,
  editingDayAdmission,
  editingGender,
} from "../action/actionCreator";

export default function StudentItem({ student }) {
  const dispatch = useDispatch();
  const showGender = () => {
    if (student.gender === "Nam")
      return <Male color="#419fcf" className={style.genderType} />;
    else return <Female color="#f378ac" className={style.genderType} />;
  };

  const handleBeginModifyStudent = () => {
    dispatch(editingId(student.id));
    dispatch(editingImg(student.img));
    dispatch(editingName(student.name));
    dispatch(editingPhoneNumber(student.phoneNumber));
    dispatch(editingBirthday(student.birthday));
    dispatch(editingDayAdmission(student.dayAdmission));
    dispatch(editingGender(student.gender));
  };

  return (
    <Link to="/ModifyStudent" className={style.link}>
      <div className={style.studentItem} onClick={handleBeginModifyStudent}>
        <div className={style.img_container}>
          <img src={student.img} alt={student.name} />
        </div>
        <div className={style.details_area}>
          <div className={style.name}>{student.name}</div>
          <div className={style.phoneNumber}>{student.phoneNumber}</div>
        </div>
        <div className={style.gender_container}>{showGender()}</div>
      </div>
    </Link>
  );
}
